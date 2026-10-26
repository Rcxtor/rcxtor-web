
import skills from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="border-t border-portfolio-border py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-portfolio-accent">
            02 / CAPABILITIES
          </p>
          <h2 className="mt-4 text-3xl font-semibold">Technical skills</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-portfolio-muted">
            Technologies, tools, and concepts used across the development process.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category} className="border-t border-portfolio-border pt-4">
              <h3 className="font-mono text-xs text-portfolio-accent">
                {group.category}
              </h3>

              <ul className="mt-4 space-y-3">
                {group.items.map((skill) => (
                  <li key={skill} className="text-sm text-portfolio-text">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
