// https://www.maadan.dev/

function Hero() {
  return (
    <section
      id="home"
      className="relative grid items-center gap-12 border-b border-portfolio-border py-16 sm:py-24 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16 lg:py-28"
    >
      {/* Hero content */}
      <div className="order-2 lg:order-1">
        {/* Main heading */}
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-portfolio-text sm:text-6xl lg:text-7xl">
          Saif
          <br />
          Ahmmed <span className="text-portfolio-accent">Sifat.</span>
        </h1>

        {/* Introduction */}
        <p className="mt-7 max-w-xl text-base leading-8 text-portfolio-muted sm:text-lg">
          I build web applications with a focus on reliable
          backend systems, thoughtful interfaces, and maintainable
          code. My primary stack is Laravel, React, and MySQL.
        </p>

        {/* Technology metadata */}
        <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-wide text-portfolio-muted">
          <span>Laravel</span>
          <span className="text-portfolio-border">/</span>
          <span>React</span>
          <span className="text-portfolio-border">/</span>
          <span>MySQL</span>
          <span className="text-portfolio-border">/</span>
          <span>REST APIs</span>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex min-h-11 items-center justify-center gap-3 bg-portfolio-accent px-5 py-3 text-sm font-medium text-portfolio-bg transition-opacity hover:opacity-80"
          >
            View selected work
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center border border-portfolio-border px-5 py-3 text-sm text-portfolio-text transition-colors hover:border-portfolio-accent hover:text-portfolio-accent"
          >
            Get in touch
          </a>

          <a
            href="/cv.pdf"
            download="Saif-Ahmm​ed-Sifat-CV.pdf"
            className="inline-flex min-h-11 items-center justify-center gap-2 px-2 py-3 text-sm text-portfolio-accent transition-opacity hover:opacity-70"
          >
            Download CV
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        {/* Location and role */}
        <div className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-portfolio-border pt-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-portfolio-muted">
              Based in
            </p>
            <p className="mt-2 text-sm text-portfolio-text">
              Dhaka, Bangladesh
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-portfolio-muted">
              Focus
            </p>
            <p className="mt-2 text-sm text-portfolio-text">
              Full-Stack Development
            </p>
          </div>
        </div>
      </div>

      {/* Profile image */}
      <div className="order-1 mx-auto w-full max-w-xs sm:max-w-sm lg:order-2 lg:ml-auto">
        <div className="relative border border-portfolio-border p-2">
          {/* Decorative corner markers */}
          <span
            aria-hidden="true"
            className="absolute -left-1 -top-1 z-10 h-5 w-5 border-l-2 border-t-2 border-portfolio-accent"
          />
          <span
            aria-hidden="true"
            className="absolute -right-1 -top-1 z-10 h-5 w-5 border-r-2 border-t-2 border-portfolio-accent"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-1 -left-1 z-10 h-5 w-5 border-b-2 border-l-2 border-portfolio-accent"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-1 -right-1 z-10 h-5 w-5 border-b-2 border-r-2 border-portfolio-accent"
          />

          <img
            src="/images/profile.png"
            alt="Portrait of Saif Ahmmed Sifat"
            width="480"
            height="600"
            fetchPriority="high"
            className="aspect-[4/5] w-full bg-portfolio-surface object-cover"
          />

          {/* Image caption */}
          <div className="flex items-center justify-between gap-3 px-2 pb-2 pt-4">
            <div>
              <p className="text-sm font-medium text-portfolio-text">
                Saif Ahmmed Sifat
              </p>
              <p className="mt-1 font-mono text-xs text-portfolio-muted">
                Software Developer
              </p>
            </div>

          </div>
        </div>

        {/* Image footnote */}
        <p className="mt-4 text-right font-mono text-[10px] uppercase tracking-[0.16em] text-portfolio-muted">
          Laravel · React · Engineering
        </p>
      </div>
    </section>
  )
}

export default Hero
