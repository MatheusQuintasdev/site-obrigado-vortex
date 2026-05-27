export default function MaintenanceActivationCard({ maintenance }) {
  const { message, cta } = maintenance;

  return (
    <section
      className="opacity-0 animate-fade-up stagger-2 w-full max-w-lg"
      aria-labelledby="maintenance-card-title"
    >
      <div className="relative overflow-hidden rounded-2xl border border-[#C8102E]/45 bg-vortex-card p-6 shadow-xl shadow-vortex-red/10 sm:p-8">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8102E]/70 to-transparent"
          aria-hidden="true"
        />

        <p
          id="maintenance-card-title"
          className="text-left text-sm leading-relaxed text-vortex-white sm:text-base"
        >
          {message}
        </p>

        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={cta.ariaLabel}
          className="mt-6 flex w-full items-center justify-center rounded-xl bg-[#C8102E] px-6 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-vortex-red/30 transition-all duration-300 animate-pulseCTA hover:bg-vortex-red-hover hover:shadow-vortex-red/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-vortex-red focus-visible:ring-offset-2 focus-visible:ring-offset-vortex-black active:scale-[0.98] sm:text-base"
        >
          {cta.label}
        </a>
      </div>
    </section>
  );
}
