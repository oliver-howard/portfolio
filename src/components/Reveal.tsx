interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
}

export function Reveal({ children, delay = 0, style, className = "" }: RevealProps) {
  return (
    <div
      className={`reveal-anim ${className}`}
      style={{ animationDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}
