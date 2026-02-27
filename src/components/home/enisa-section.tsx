export default function EnisaSection() {
  return (
    <section className="w-full">
      <div className="w-full bg-black/40 backdrop-blur-md border-y border-white/10 py-10 sm:py-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6">
          Supported by
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="/logos/enisa-logo.png"
            alt="ENISA - Certified as Emerging Company"
            className="h-9 w-auto sm:h-10 md:h-12"
          />
        </div>

        <p className="text-sm sm:text-base text-white/75 max-w-3xl mx-auto leading-relaxed px-6">
          Certified as an Emerging Company by the Ministry of Industry and Tourism.
        </p>
      </div>
    </section>
  );
}