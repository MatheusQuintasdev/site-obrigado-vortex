import VortexLogo from './VortexLogo';
import CheckIcon from './icons/CheckIcon';
import MaintenanceActivationCard from './MaintenanceActivationCard';
import NextStepsTimeline from './NextStepsTimeline';
import MaterialsWhatsAppSection from './MaterialsWhatsAppSection';
import PageFooter from './PageFooter';

export default function ThankYouPage({ content }) {
  const { brand, hero, maintenance, nextSteps, whatsappCta, footer } = content;

  return (
    <div className="flex min-h-screen flex-col">
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-vortex-red/5 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-vortex-red/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <header className="relative z-10 px-4 pt-8 pb-6 sm:px-6 sm:pt-10 sm:pb-8">
        <div className="mx-auto flex max-w-3xl justify-center">
          <VortexLogo brand={brand} />
        </div>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center px-4 pb-12 sm:px-6">
        <section
          className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
          aria-labelledby="hero-title"
        >
          <div
            className="mb-6 flex h-20 w-20 animate-check-pop items-center justify-center rounded-full bg-vortex-red/15 text-vortex-red ring-2 ring-vortex-red/40"
            role="status"
            aria-label={hero.successLabel}
          >
            <CheckIcon className="h-10 w-10" />
          </div>

          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-vortex-red opacity-0 animate-fade-up stagger-1">
            {hero.successLabel}
          </p>

          <h1
            id="hero-title"
            className="opacity-0 animate-fade-up stagger-1 max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-vortex-white sm:text-3xl sm:leading-tight lg:text-4xl"
          >
            {hero.title}
          </h1>

          <p className="opacity-0 animate-fade-up stagger-2 mt-4 max-w-2xl text-base leading-relaxed text-vortex-muted sm:text-lg">
            {hero.subtitle}
          </p>
        </section>

        <div className="mx-auto mt-10 flex w-full max-w-3xl flex-col items-center gap-10">
          <MaintenanceActivationCard maintenance={maintenance} />
          <NextStepsTimeline nextSteps={nextSteps} />
          <MaterialsWhatsAppSection whatsappCta={whatsappCta} />
        </div>
      </main>

      <PageFooter footer={footer} />
    </div>
  );
}
