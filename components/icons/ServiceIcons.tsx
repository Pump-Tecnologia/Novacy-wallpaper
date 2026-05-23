interface IconProps {
  className?: string;
}

export function IconResidential({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4,18 20,5 36,18" />
      <rect x="8" y="18" width="24" height="17" />
      <rect x="16" y="25" width="8" height="10" />
      <line x1="4" y1="35" x2="36" y2="35" />
    </svg>
  );
}

export function IconCommercial({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="8" width="28" height="27" />
      <line x1="4" y1="35" x2="36" y2="35" />
      <rect x="10" y="12" width="4" height="4" />
      <rect x="18" y="12" width="4" height="4" />
      <rect x="26" y="12" width="4" height="4" />
      <rect x="10" y="20" width="4" height="4" />
      <rect x="18" y="20" width="4" height="4" />
      <rect x="26" y="20" width="4" height="4" />
      <rect x="16" y="27" width="8" height="8" />
      <line x1="10" y1="4" x2="10" y2="8" />
      <line x1="20" y1="2" x2="20" y2="8" />
      <line x1="30" y1="4" x2="30" y2="8" />
    </svg>
  );
}

export function IconClinic({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="5" width="30" height="30" />
      <line x1="20" y1="11" x2="20" y2="29" />
      <line x1="11" y1="20" x2="29" y2="20" />
      <line x1="5" y1="5" x2="12" y2="12" />
      <line x1="35" y1="5" x2="28" y2="12" />
      <line x1="5" y1="35" x2="12" y2="28" />
      <line x1="35" y1="35" x2="28" y2="28" />
    </svg>
  );
}

export function IconRemoval({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Cabo da espátula */}
      <line x1="28" y1="4" x2="10" y2="30" />
      {/* Lâmina */}
      <path d="M10,30 L6,36 L14,34 Z" />
      {/* Camadas de parede sendo removidas */}
      <line x1="22" y1="12" x2="36" y2="12" />
      <line x1="24" y1="17" x2="36" y2="17" />
      <line x1="26" y1="22" x2="36" y2="22" />
      {/* Seta de remoção */}
      <polyline points="18,8 14,4 10,8" />
    </svg>
  );
}
