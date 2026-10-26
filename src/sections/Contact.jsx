function Contact() {
  return (
    <section id="contact" className="border-t border-portfolio-border py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-portfolio-accent">
            06 / CONTACT
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-portfolio-text">
            Let's connect <br /> and  <br/><span className="text-portfolio-accent" >build.</span>
          </h2>
        </div>

        <div className="space-y-8">
          <p className="max-w-xl text-sm leading-7 text-portfolio-muted sm:text-base">
            Open to junior full-stack roles, collaborations, and freelance work. Get in touch through any of the options below:
          </p>

          {/* Direct Actions & Links Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Email */}
            <div className="border border-portfolio-border bg-portfolio-surface p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-portfolio-muted">
                Email
              </p>
              <a
                href="mailto:sefat64@gmail.com"
                className="mt-2 block text-sm font-medium text-portfolio-text hover:text-portfolio-accent transition-colors"
              >
                sefat64@gmail.com ↗
              </a>
            </div>

            {/* Phone / WhatsApp */}
            <div className="border border-portfolio-border bg-portfolio-surface p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-portfolio-muted">
                Phone / WhatsApp
              </p>
              <a
                href="tel:+8801533499409"
                className="mt-2 block text-sm font-medium text-portfolio-text hover:text-portfolio-accent transition-colors"
              >
                +880 15 334 99409 ↗
              </a>
            </div>

            {/* GitHub */}
            <div className="border border-portfolio-border bg-portfolio-surface p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-portfolio-muted">
                GitHub
              </p>
              <a
                href="https://github.com/Rcxtor"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-sm font-medium text-portfolio-text hover:text-portfolio-accent transition-colors"
              >
                github.com/Rcxtor ↗
              </a>
            </div>

            {/* LinkedIn */}
            <div className="border transition-colors duration-200 hover:border-portfolio-accent hover:text-portfolio-accent border-portfolio-border bg-portfolio-surface p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-portfolio-muted">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/saif-ahmed-sifat/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-sm font-medium text-portfolio-text hover:text-portfolio-accent transition-colors"
              >
                linkedin.com/in/saif-ahmed-sifat/ ↗
              </a>
            </div>
          </div>

          {/* Primary Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="mailto:sefat64@gmail.com"
              className="inline-flex min-h-11 items-center justify-center gap-3 bg-portfolio-accent px-6 py-3 text-sm font-medium text-portfolio-bg transition-opacity hover:opacity-80"
            >
              Send an email
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="/CV_download.pdf"
              download="Saif-Ahmmed-Sifat-CV.pdf"
              className="inline-flex min-h-11 items-center justify-center border border-portfolio-border px-6 py-3 text-sm text-portfolio-text transition-colors hover:border-portfolio-accent hover:text-portfolio-accent"
            >
              Download CV ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact