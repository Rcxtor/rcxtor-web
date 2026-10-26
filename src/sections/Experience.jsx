
import experience from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="border-t border-portfolio-border py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-portfolio-accent">
            03 / CAREER
          </p>
          <h2 className="mt-4 text-3xl font-semibold">Experience</h2>
        </div>

        <div>
          {experience.map((item) => (
            <article
              key={item.id}
              className="border-t border-portfolio-border py-6 first:pt-0 first:border-t-0"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-medium">{item.role}</h3>
                  <p className="mt-1 text-sm text-portfolio-muted">
                    {item.organization}
                  </p>
                </div>

                <span className="font-mono text-xs text-portfolio-accent">
                  {item.period}
                </span>
              </div>

              {/* <p className="mt-4 max-w-2xl text-sm leading-6 text-portfolio-muted">
                {item.description}
              </p> */}
              <ul className="mt-4 max-w-2xl space-y-1.5 text-sm leading-6 text-portfolio-muted list-disc pl-5">
                {item.description.map((description) => (
                  <li key={description}>
                    {description}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-portfolio-border px-2 py-1 font-mono text-xs text-portfolio-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
