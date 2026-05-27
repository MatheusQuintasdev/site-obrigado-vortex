export default function PageFooter({ footer }) {
  return (
    <footer className="mt-auto w-full border-t border-vortex-border bg-vortex-black/80 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <p className="max-w-xl text-sm leading-relaxed text-vortex-muted">
          {footer.copyright}
        </p>
        <p className="text-xs text-vortex-muted/80">{footer.rights}</p>

        <nav aria-label="Links de suporte">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footer.supportLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-vortex-white/80 transition-colors duration-200 hover:text-vortex-red focus:outline-none focus-visible:text-vortex-red focus-visible:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
