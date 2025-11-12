import Link from 'next/link';

interface AnimatedLinkProps {
  href: string;
  text: string;
  showArrow?: boolean;
  arrowPosition?: 'left' | 'right';
  variant?: 'primary' | 'secondary' | 'white';
  className?: string;
}

export function AnimatedLink({
  href,
  text,
  showArrow = false,
  arrowPosition = 'right',
  variant = 'primary',
  className = '',
}: AnimatedLinkProps) {
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-gray-900 hover:bg-secondary/80',
    white: 'bg-white text-primary hover:bg-gray-100',
  };

  const Arrow = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 ${
        arrowPosition === 'right'
          ? 'group-hover:translate-x-1'
          : 'group-hover:-translate-x-1 rotate-180'
      }`}
    >
      <path
        d="M6 3L11 8L6 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <Link
      href={href}
      className={`
        group inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold
        transition-all duration-300 relative
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {showArrow && arrowPosition === 'left' && <Arrow />}

      <span className="relative">
        {text}
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-current transform origin-left transition-transform duration-300 group-hover:scale-x-0" />
      </span>

      {showArrow && arrowPosition === 'right' && <Arrow />}
    </Link>
  );
}
