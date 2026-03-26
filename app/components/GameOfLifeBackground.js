"use client";

import { useEffect, useRef } from "react";

// Лёгкий фон-симуляция «Игры жизни» Конвея на канвасе
// Оптимизации:
// - Адаптация под DPR
// - Ограниченная частота тиков
// - Пауза при невидимости вкладки
// - Простая переинициализация при деградации популяции

export default function GameOfLifeBackground() {
  const canvasRef = useRef(null); // канвас игры жизни
  const rafRef = useRef(0);
  const gridRef = useRef(null);
  const nextGridRef = useRef(null);
  const colsRef = useRef(0);
  const rowsRef = useRef(0);
  const lastTickRef = useRef(0);
  const runningRef = useRef(true);
  const lastPaintRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!ctx) return;

    const preferredCellSize = 16; // в CSS-пикселях — крупнее клетки
    const tickIntervalMs = 60; // частота обновления игры
    const deathProbability = 0.1; // вероятность естественной смерти за тик

    function resize() {
      const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
      const width = window.innerWidth;
      // Используем максимальную высоту для мобильных (учитываем динамическую адресную строку)
      const height = Math.max(
        window.innerHeight,
        document.documentElement.clientHeight,
        window.visualViewport?.height || 0
      );
      // Игра
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const cols = Math.max(10, Math.floor(width / preferredCellSize));
      const rows = Math.max(10, Math.floor(height / preferredCellSize));
      colsRef.current = cols;
      rowsRef.current = rows;

      gridRef.current = new Uint8Array(cols * rows);
      nextGridRef.current = new Uint8Array(cols * rows);
      draw(ctx, gridRef.current, cols, rows, preferredCellSize);
    }

    function step(current, next, cols, rows) {
      let aliveCount = 0;
      for (let y = 0; y < rows; y++) {
        const yUp = (y - 1 + rows) % rows;
        const yDown = (y + 1) % rows;
        for (let x = 0; x < cols; x++) {
          const xLeft = (x - 1 + cols) % cols;
          const xRight = (x + 1) % cols;

          const idx = y * cols + x;
          const n =
            current[yUp * cols + xLeft] +
            current[yUp * cols + x] +
            current[yUp * cols + xRight] +
            current[y * cols + xLeft] +
            current[y * cols + xRight] +
            current[yDown * cols + xLeft] +
            current[yDown * cols + x] +
            current[yDown * cols + xRight];

          // Правила ускоренного затухания
          // Живая клетка выживает только при 2 соседях (S2)
          // Мёртвая оживает при ровно 3 соседях (B3)
          const alive = current[idx] === 1;
          let nextAlive = alive ? (n === 2 || n === 3 ? 1 : 0) : n === 3 ? 1 : 0;
          // Естественная смерть со временем независимо от соседей
          if (nextAlive === 1 && Math.random() < deathProbability) {
            nextAlive = 0;
          }
          next[idx] = nextAlive;
          aliveCount += nextAlive;
        }
      }
      return aliveCount;
    }

    function draw(ctx, grid, cols, rows, size) {
      // Полностью перерисовываем кадр для детерминированности
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // Рисуем только живые клетки; цвет акцента #ff2a2a с мягкой прозрачностью
      ctx.fillStyle = "rgba(255,42,42,1)";
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (grid[y * cols + x] === 1) {
            ctx.fillRect(x * size, y * size, size, size);
          }
        }
      }
    }

    function animate(ts) {
      if (!runningRef.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      if (lastTickRef.current === 0) lastTickRef.current = ts;
      const elapsed = ts - lastTickRef.current;
      if (elapsed >= tickIntervalMs) {
        lastTickRef.current = ts;
        const cols = colsRef.current;
        const rows = rowsRef.current;
        const current = gridRef.current;
        const next = nextGridRef.current;
        if (current && next && cols && rows) {
          step(current, next, cols, rows);
          gridRef.current = next;
          nextGridRef.current = current;
          draw(ctx, gridRef.current, cols, rows, preferredCellSize);
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    }

    const handleVisibility = () => {
      runningRef.current = document.visibilityState === "visible";
      // Сброс таймера, чтобы избежать длинного elapsed
      if (runningRef.current) lastTickRef.current = 0;
    };

    const handleResize = () => {
      resize();
    };

    // Рисуем живые клетки под курсором (кисть) с небольшим радиусом
    const brushRadius = 1; // в клетках; 1 => 3x3
    function paintAtClientPosition(clientX, clientY) {
      const cols = colsRef.current;
      const rows = rowsRef.current;
      const current = gridRef.current;
      const next = nextGridRef.current;
      if (!cols || !rows || !current || !next) return;

      const x = Math.floor(clientX / preferredCellSize);
      const y = Math.floor(clientY / preferredCellSize);
      for (let dy = -brushRadius; dy <= brushRadius; dy++) {
        for (let dx = -brushRadius; dx <= brushRadius; dx++) {
          const gx = x + dx;
          const gy = y + dy;
          if (gx < 0 || gy < 0 || gx >= cols || gy >= rows) continue;
          const idx = gy * cols + gx;
          current[idx] = 1;
          next[idx] = 1;
        }
      }
    }

    function handlePointerMove(e) {
      const now = performance.now();
      // Лёгкий троттлинг, чтобы не спамить записью
      if (now - lastPaintRef.current < 20) return;
      lastPaintRef.current = now;
      paintAtClientPosition(e.clientX, e.clientY);
    }

    function handleTouchMove(e) {
      const now = performance.now();
      if (now - lastPaintRef.current < 20) return;
      lastPaintRef.current = now;
      if (e.touches && e.touches.length > 0) {
        const t = e.touches[0];
        paintAtClientPosition(t.clientX, t.clientY);
      }
    }

    resize();
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    // Слушаем изменения visualViewport для iOS (адресная строка, клавиатура)
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
    }
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="bg-effect" aria-hidden="true" />
  );
}
