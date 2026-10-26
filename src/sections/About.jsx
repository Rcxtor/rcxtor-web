function About() {
  return (
    <section id="about" className="border-t border-portfolio-border py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        {/* Left column: Photo card with corner accents */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-portfolio-accent mb-6">
            05 / ABOUT
          </p>
          <div className="relative border border-portfolio-border p-2 max-w-sm">
            {/* Decorative corner markers */}
            <span
              aria-hidden="true"
              className="absolute -left-1 -top-1 z-10 h-5 w-5 border-l-2 border-t-2 border-portfolio-accent"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-1 -right-1 z-10 h-5 w-5 border-b-2 border-r-2 border-portfolio-accent"
            />

            <div className="aspect-[4/5] w-full bg-portfolio-surface flex items-center justify-center">
              <span className="font-mono text-xs text-portfolio-muted tracking-widest">
                <img
              src="/images/profile.png"
              alt="Portrait of Saif Ahmmed Sifat"
              width="480"
              height="600"
              fetchPriority="high"
              className="aspect-[4/5] w-full bg-portfolio-surface object-cover"
            />
              </span>
            </div>
          </div>

          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-portfolio-muted">
            LARAVEL · REACT · MYSQL
          </p>
        </div>

        {/* Right column: Content and metadata */}
        <div className="lg:pt-12">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-portfolio-text leading-[1.1]">
            I build reliable <span className="text-portfolio-accent">web apps</span> for real people.
          </h2>

          <p className="mt-6 text-sm leading-7 text-portfolio-muted sm:text-base">
            I’m a CSE graduate from BRAC University. I started in game development with Unity, and now I focus on full-stack web work with Laravel and React. I enjoy building practical applications that solve real problems, with a focus on clean interfaces and reliable functionality. I prefer a hands-on approach to development, breaking problems into smaller steps and continuously improving my code as I learn.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-portfolio-border pt-6">
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
                Education
              </p>
              <p className="mt-2 text-sm text-portfolio-text">
                BSc CSE, BRAC University
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-portfolio-muted">
                Looking for
              </p>
              <p className="mt-2 text-sm text-portfolio-text">
                Full-stack roles
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About