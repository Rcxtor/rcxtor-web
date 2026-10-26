
function About() {
  return (
    <section id="about" className="border-t border-portfolio-border py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-portfolio-accent">
            05 / PROFILE
          </p>
          <h2 className="mt-4 text-3xl font-semibold">About</h2>
        </div>

        <div className="max-w-3xl">
          <p className="text-xl leading-8 text-portfolio-text sm:text-2xl sm:leading-9">
            A brief introduction to your approach to software engineering,
            the problems you enjoy solving, and the kind of work you want to do.
          </p>

          <p className="mt-5 text-sm leading-7 text-portfolio-muted">
            Use this space to explain your development philosophy, interests,
            and professional goals. Keep the final version concise and specific.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
