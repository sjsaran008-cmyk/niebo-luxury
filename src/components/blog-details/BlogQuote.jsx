export default function BlogQuote() {
  return (
    <section className="bg-[#F7F5F2] py-12">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-[28px] border border-[#E8E3DA] bg-white px-8 py-14 text-center shadow-sm">
          <div className="mx-auto mb-8 h-px w-20 bg-[#C8A96A]" />

          <blockquote className="text-3xl font-light italic leading-relaxed text-[#111]">
            “Beautiful interiors begin with thoughtful planning and timeless craftsmanship.”
          </blockquote>

          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-[#C8A96A]">
            — Niebo Interiors
          </p>
        </div>
      </div>
    </section>
  );
}

