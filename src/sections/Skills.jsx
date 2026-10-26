import skills from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-portfolio-accent">
              02 / CAPABILITIES
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-portfolio-text">Technical skills</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-portfolio-muted">
              Technologies, tools, and concepts used across the development process.
            </p>
          </div>

          <div className="space-y-8">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="font-mono text-xs uppercase tracking-wider text-portfolio-muted">
                  {group.category}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                    key={skill}
                    className="border  transition-colors duration-200 hover:border-portfolio-accent hover:text-portfolio-accent border-portfolio-border bg-portfolio-surface px-3 py-1.5 font-mono text-xs text-portfolio-text"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills