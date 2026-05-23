import Link from 'next/link';

interface ButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'accent' | 'outline';
  className?: string;
}

export default function Button({ label, href, variant = 'primary', className = '' }: ButtonProps) {
  const styles = {
    primary: "bg-primary text-white hover:bg-secondary",
    accent: "bg-accent text-white hover:opacity-90",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <Link 
      href={href} 
      className={`inline-block px-8 py-3 font-semibold transition-all duration-300 rounded-sm text-sm tracking-widest ${styles[variant]} ${className}`}
    >
      {label}
    </Link>
  );
}