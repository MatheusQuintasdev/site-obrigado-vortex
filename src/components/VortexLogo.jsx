export default function VortexLogo({ brand }) {
  const src = brand.logoSrc ?? '/logo-vortex.png';

  return (
    <div className="flex justify-center" role="img" aria-label={brand.logoAlt}>
      <img
        src={src}
        alt={brand.logoAlt}
        width={brand.logoWidth ?? 280}
        height={brand.logoHeight ?? 235}
        className="h-auto w-44 max-w-[min(100%,280px)] object-contain sm:w-56 sm:max-w-[320px] md:w-64"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}
