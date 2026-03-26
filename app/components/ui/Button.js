'use client';

import Link from 'next/link';

function classNames(...list) {
  return list.filter(Boolean).join(' ');
}

export default function Button({ href, variant = 'default', className, children, ...props }) {
  const variantClass = variant === 'primary' ? 'primary' : variant === 'accent' ? 'accent' : '';
  const classes = classNames('btn', variantClass, className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}


