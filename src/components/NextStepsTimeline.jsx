export default function NextStepsTimeline({ nextSteps }) {
  return (
    <section
      className="opacity-0 animate-fade-up stagger-3 w-full max-w-lg"
      aria-labelledby="next-steps-title"
    >
      <div className="mb-6 text-center sm:text-left">
        <h2
          id="next-steps-title"
          className="text-xl font-bold text-vortex-white sm:text-2xl"
        >
          {nextSteps.title}
        </h2>
        <p className="mt-2 text-sm text-vortex-muted sm:text-base">
          {nextSteps.description}
        </p>
      </div>

      <ol className="relative space-y-0">
        {nextSteps.steps.map((step, index) => (
          <li key={step.id} className="relative flex gap-4 pb-8 last:pb-0">
            {index < nextSteps.steps.length - 1 && (
              <span
                className="absolute left-[15px] top-8 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-vortex-red/60 to-vortex-border"
                aria-hidden="true"
              />
            )}

            <div
              className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-vortex-red text-sm font-bold text-white shadow-lg shadow-vortex-red/30"
              aria-hidden="true"
            >
              {step.id}
            </div>

            <div className="min-w-0 flex-1 rounded-xl border border-vortex-border bg-vortex-card/80 p-4 transition-colors duration-300 hover:border-vortex-red/40 hover:bg-vortex-card">
              <h3 className="font-semibold text-vortex-white">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-vortex-muted">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
