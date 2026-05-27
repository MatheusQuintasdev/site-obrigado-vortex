import WhatsAppCTA from './WhatsAppCTA';

export default function MaterialsWhatsAppSection({ whatsappCta }) {
  return (
    <section
      className="opacity-0 animate-fade-up stagger-4 w-full max-w-lg text-center"
      aria-labelledby="materials-section-title"
    >
      <h2
        id="materials-section-title"
        className="text-lg font-bold text-vortex-white sm:text-xl"
      >
        {whatsappCta.sectionTitle}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-vortex-muted sm:text-base">
        {whatsappCta.sectionHint}
      </p>
      <div className="mt-6 flex justify-center">
        <WhatsAppCTA
          cta={whatsappCta}
          variant="secondary"
          className="!opacity-100 !animate-none w-full sm:w-auto"
        />
      </div>
    </section>
  );
}
