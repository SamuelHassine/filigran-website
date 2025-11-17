import filigranLogo from '@/assets/filigran-logo.svg';

export const FiligranLogo = ({ className = "h-8" }: { className?: string }) => (
  <img src={filigranLogo} alt="Filigran" className={className} />
);
