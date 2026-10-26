
function Contact() {
  return (
    <section id="contact" className="border-t border-portfolio-border py-16 sm:py-20">
      <p className="font-mono text-xs tracking-[0.2em] text-portfolio-accent">
        06 / CONTACT
      </p>

      <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Have a project in mind?
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-portfolio-muted">
            Use this section for professional inquiries, collaboration,
            and development opportunities.
          </p>
        </div>

        <a
          href="mailto:your-email@example.com"
          className="w-fit bg-portfolio-accent px-5 py-3 font-mono text-xs font-medium text-portfolio-bg transition-opacity hover:opacity-80"
        >
          SEND AN EMAIL ↗
        </a>
      </div>
    </section>
  )
}

export default Contact
