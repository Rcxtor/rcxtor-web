import projects from '../data/projects'

function SelectedWork() {
  return (
    <section id="work" className="border-t border-portfolio-border py-16 sm:py-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-portfolio-accent">
            01 / SELECTED WORK
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects &amp; systems
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-6 text-portfolio-muted">
          A selection of applications built to solve practical problems
          and demonstrate full-stack engineering skills.
        </p>
      </div>

      <div className="mt-10 grid gap-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className="border border-portfolio-border p-6 sm:p-8"
          >
            <p className="font-mono text-xs text-portfolio-accent">
              {project.category}
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              {project.name}
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-portfolio-muted">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SelectedWork
