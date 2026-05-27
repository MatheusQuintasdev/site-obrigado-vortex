import WhatsAppIcon from './icons/WhatsAppIcon';

const variants = {
  primary: {
    base:
      'bg-vortex-red text-white shadow-lg shadow-vortex-red/25 animate-pulseCTA hover:bg-vortex-red-hover hover:shadow-vortex-red/40',
    ring: 'focus-visible:ring-vortex-red',
  },
  secondary: {
    base:
      'border-2 border-vortex-red/60 bg-transparent text-vortex-white shadow-md shadow-black/20 hover:border-vortex-red hover:bg-vortex-red/10',
    ring: 'focus-visible:ring-vortex-red',
  },
};

export default function WhatsAppCTA({ cta, variant = 'primary', className = '' }) {
  const styles = variants[variant] ?? variants.primary;

  return (
    <a
      href={cta.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={cta.ariaLabel}
      className={`group inline-flex w-full max-w-lg items-center justify-center gap-3 rounded-xl px-6 py-4 text-base font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-vortex-black active:scale-[0.98] sm:min-w-[320px] sm:px-8 ${styles.base} ${styles.ring} ${className}`}
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:scale-110" />
      <span>{cta.label}</span>
    </a>
  );
}
