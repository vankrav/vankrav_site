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
  const noiseCanvasRef = useRef(null); // канвас плёночного шума
  const rafRef = useRef(0);
  const noiseRafRef = useRef(0);
  const gridRef = useRef(null);
  const nextGridRef = useRef(null);
  const colsRef = useRef(0);
  const rowsRef = useRef(0);
  const lastTickRef = useRef(0);
  const runningRef = useRef(true);
  const lastPaintRef = useRef(0);
  const noisePatternRef = useRef(null);
  const grainCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const noiseCanvas = noiseCanvasRef.current;
    if (!canvas || !noiseCanvas) return;

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    const noiseCtx = noiseCanvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!ctx || !noiseCtx) return;

    const preferredCellSize = 16; // в CSS-пикселях — крупнее клетки
    const tickIntervalMs = 100; // частота обновления игры
    const deathProbability = 0.05; // вероятность естественной смерти за тик
    const noiseIntervalMs = 100; // обновление шума ~16 FPS
    const grainTileSize = 64; // размер тайла для шума

    function resize() {
      const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
      const width = window.innerWidth;
      const height = window.innerHeight;
      // Игра
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      // Шум
      noiseCanvas.style.width = `${width}px`;
      noiseCanvas.style.height = `${height}px`;
      noiseCanvas.width = Math.floor(width * dpr);
      noiseCanvas.height = Math.floor(height * dpr);
      noiseCtx.setTransform(1, 0, 0, 1, 0, 0);
      noiseCtx.scale(dpr, dpr);

      const cols = Math.max(10, Math.floor(width / preferredCellSize));
      const rows = Math.max(10, Math.floor(height / preferredCellSize));
      colsRef.current = cols;
      rowsRef.current = rows;

      gridRef.current = new Uint8Array(cols * rows);
      nextGridRef.current = new Uint8Array(cols * rows);
      //   seed(gridRef.current, cols, rows);
      draw(ctx, gridRef.current, cols, rows, preferredCellSize);
    }

    // function seed(grid, cols, rows) {
    //   // равномерная инициализация с разреженностью
    //   const density = 0.18; // 18% живых
    //   for (let i = 0; i < grid.length; i++) {
    //     grid[i] = Math.random() < density ? 1 : 0;
    //   }
    // }

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

      // Сетка в CSS-пикселях, так как контекст уже масштабирован под DPR
      const width = Math.floor(ctx.canvas.width / (window.devicePixelRatio || 1));
      const height = Math.floor(ctx.canvas.height / (window.devicePixelRatio || 1));

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

    // Подготовка тайла шума
    function ensureGrainCanvas() {
      if (!grainCanvasRef.current) {
        const off = document.createElement("canvas");
        off.width = grainTileSize;
        off.height = grainTileSize;
        grainCanvasRef.current = off;
      }
      return grainCanvasRef.current;
    }

    function updateNoisePattern() {
      const off = ensureGrainCanvas();
      const gctx = off.getContext("2d", { alpha: true });
      const imageData = gctx.createImageData(off.width, off.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = (Math.random() * 255) | 0; // случайный серый
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 255;
      }
      gctx.putImageData(imageData, 0, 0);
      noisePatternRef.current = noiseCtx.createPattern(off, "repeat");
    }

    let lastNoiseTs = 0;
    function animateNoise(ts) {
      if (!runningRef.current) {
        noiseRafRef.current = requestAnimationFrame(animateNoise);
        return;
      }
      if (ts - lastNoiseTs >= noiseIntervalMs) {
        lastNoiseTs = ts;
        updateNoisePattern();
        // перерисовать слой шума
        const width = Math.floor(noiseCtx.canvas.width / (window.devicePixelRatio || 1));
        const height = Math.floor(noiseCtx.canvas.height / (window.devicePixelRatio || 1));
        noiseCtx.clearRect(0, 0, noiseCtx.canvas.width, noiseCtx.canvas.height);
        if (noisePatternRef.current) {
          noiseCtx.save();
          noiseCtx.globalAlpha = 0.06; // интенсивность плёночного шума
          noiseCtx.fillStyle = noisePatternRef.current;
          noiseCtx.fillRect(0, 0, width, height);
          noiseCtx.restore();
        }
      }
      noiseRafRef.current = requestAnimationFrame(animateNoise);
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
          const alive = step(current, next, cols, rows);
        //   // если почти всё вымерло — пересеять для динамики
        //   if (alive < (cols * rows) * 0.04) {
        //     seed(next, cols, rows);
        //   }
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
    rafRef.current = requestAnimationFrame(animate);
    noiseRafRef.current = requestAnimationFrame(animateNoise);

    return () => {
      cancelAnimationFrame(rafRef.current);
      cancelAnimationFrame(noiseRafRef.current);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="bg-effect" aria-hidden="true" />
      <canvas ref={noiseCanvasRef} className="bg-effect" aria-hidden="true" />
    </>
  );
}


