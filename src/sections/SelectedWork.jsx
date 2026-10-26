
import projects from '../data/projects';
import FadeIn from "../components/FadeIn";
import { useState } from "react";
import ImageLightbox from "../components/ImageLightbox";


function ProjectImage({ project, compact = false, onPreview }) {
  return (
    <div
      className={`group relative overflow-hidden border border-portfolio-border bg-portfolio-surface transition-colors hover:border-portfolio-accent ${
        compact ? "aspect-[3/2]" : "aspect-[16/10]"
      }`}
    >
      {project.image ? (
        <button
          type="button"
          onClick={() => onPreview?.(project)}
          aria-label={`Enlarge ${project.name} screenshot`}
          className="absolute inset-0 block h-full w-full cursor-zoom-in"
        >
          <img
            src={project.image}
            alt={project.imageAlt || `${project.name} project screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            onError={(event) => {
              event.currentTarget.style.display = "none";
              event.currentTarget.nextElementSibling.hidden = false;
            }}
          />

          <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-white/20 bg-black/60 px-3 py-2 font-mono text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
            View larger ↗
          </span>
        </button>
      ) : null}

      <div
        hidden={Boolean(project.image)}
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-portfolio-muted"
      >
        <span className="font-mono text-xs tracking-[0.2em]">
          {project.name.toUpperCase()}
        </span>
        <span className="h-px w-10 bg-portfolio-accent" />
        <span className="font-mono text-[10px]">
          PROJECT PREVIEW
        </span>
      </div>

      <div className="pointer-events-none absolute inset-0 border border-white/5" />

      {!compact && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-portfolio-bg/80 to-transparent p-4 sm:p-5">
          <span className="font-mono text-[10px] tracking-[0.16em] text-portfolio-text">
            {project.category}
          </span>
          <span className="font-mono text-[10px] text-portfolio-accent">
            {project.status}
          </span>
        </div>
      )}
    </div>
  );
}

function ProjectTags({ stack }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {stack.map((technology) => (
        <span
          key={technology}
          className="border transition-all hover:-translate-y-0.5 active:translate-y-0 duration-200 hover:border-portfolio-accent hover:text-portfolio-accent border-portfolio-border px-2.5 py-1 font-mono text-[10px] text-portfolio-muted"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ github, live }) {
  if (!github && !live) return null;

  return (
    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="group/link inline-flex items-center gap-2 text-xs text-portfolio-text transition-colors hover:text-portfolio-accent"
        >
          GitHub
          <span className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
            ↗
          </span>
        </a>
      )}

      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="group/link inline-flex items-center gap-2 text-xs text-portfolio-accent transition-colors hover:text-portfolio-text"
        >
          Live site
          <span className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
            ↗
          </span>
        </a>
      )}
    </div>
  );
}

function FeaturedProject({ project, reverse = false, onPreview  }) {
  return (
    <article className="grid items-center gap-8 border-b border-portfolio-border py-10 md:grid-cols-2 md:gap-12 lg:gap-16 lg:py-14">
      <div className={reverse ? 'md:order-2' : ''}>
        <ProjectImage project={project} onPreview={onPreview} />
      </div>

      <div className={reverse ? 'md:order-1' : ''}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-2xl tracking-tight text-portfolio-accent/70">
            {String(project.id).padStart(2, '0')}
          </span>
          <span className="h-px w-8 bg-portfolio-border" />
          <span className="font-mono text-[10px] tracking-[0.15em] text-portfolio-muted">
            {project.status}
          </span>
        </div>

        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-portfolio-accent sm:text-xs">
          {project.category}
        </p>

        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-portfolio-text sm:text-4xl">
          {project.name}
        </h3>

        <p className="mt-4 max-w-lg text-sm leading-7 text-portfolio-muted sm:text-base">
          {project.description}
        </p>

        {project.problem && (
          <p className="mt-3 max-w-lg text-sm leading-7 text-portfolio-muted/80">
            {project.problem}
          </p>
        )}

        {project.features?.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 text-sm leading-6 text-portfolio-text/90"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-portfolio-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <ProjectTags stack={project.stack} />

        <ProjectLinks github={project.github} live={project.live} />
      </div>
    </article>
  );
}

function OtherProjectRow({ project, onPreview }) {
  return (
    <article className="group grid grid-cols-[88px_minmax(0,1fr)_20px] items-center gap-4 border-b border-portfolio-border py-5 sm:grid-cols-[120px_minmax(0,1fr)_24px] sm:gap-6 sm:py-6">
      <ProjectImage project={project} compact onPreview={onPreview} />

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-mono text-[10px] text-portfolio-accent">
            {String(project.id).padStart(2, '0')}
          </span>
          <a href={project.live || project.github || '#contact'}
             target={project.live || project.github ? '_blank' : undefined}
             rel={project.live || project.github ? 'noreferrer' : undefined} className="font-medium no-lift text-portfolio-text transition-colors hover:text-portfolio-accent">
            {project.name}
          </a>
        </div>

        <p className="mt-1.5 text-xs leading-5 text-portfolio-muted sm:text-sm sm:leading-6">
          {project.description}
        </p>

        <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1">
          {project.stack.map((technology) => (
            <span
              key={technology}
              className="font-mono text-[9px] text-portfolio-muted sm:text-[10px]"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <a
        href={project.live || project.github || '#contact'}
        target={project.live || project.github ? '_blank' : undefined}
        rel={project.live || project.github ? 'noreferrer' : undefined}
        aria-label={`View ${project.name}`}
        className="text-lg text-portfolio-muted transition-transform hover:-translate-y-1 group-hover:translate-x-1 hover:text-portfolio-accent"
      >
        ↗
      </a>
    </article>
  );
}

function SelectedWork() {
  const [previewImage, setPreviewImage] = useState(null);
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="work"
      className=" py-16 sm:py-20"
    >

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section heading */}
      <FadeIn>
        <div>
          <p className="font-mono text-xs tracking-wide text-portfolio-accent">
            01 / Selected work
          </p>

          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-portfolio-text sm:text-5xl">
            Selected <span className="text-portfolio-accent">work.</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-portfolio-muted sm:text-base">
            A selection of projects exploring practical problems, full-stack
            development, and thoughtful implementation.
          </p>

          {featuredProjects.length > 0 && (
            <p className="mb-0 mt-10 font-mono text-xs text-portfolio-muted">
              Featured projects
            </p>
          )}
        </div>
      </FadeIn>

        {/* Featured projects */}
      <FadeIn>
        <div>
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
              onPreview={(selectedProject) =>
                setPreviewImage({
                  src: selectedProject.image,
                  alt:
                    selectedProject.imageAlt ||
                    `${selectedProject.name} project screenshot`,
                })
              }
            />
          ))}
        </div>
      </FadeIn>

        {/* Other projects: appears when featured: false projects exist */}
        {otherProjects.length > 0 && (
        <FadeIn>
          <div className="mt-12">
            <p className="mb-2 font-mono text-xs text-portfolio-muted">
              Other projects
            </p>

            <div>
              {otherProjects.map((project) => (
                <OtherProjectRow
                  key={project.id}
                  project={project}
                  onPreview={(selectedProject) =>
                    setPreviewImage({
                      src: selectedProject.image,
                      alt:
                        selectedProject.imageAlt ||
                        `${selectedProject.name} project screenshot`,
                    })
                  }
                />
              ))}
            </div>
          </div>
        </FadeIn>
        )}
      </div>
      <ImageLightbox
        src={previewImage?.src}
        alt={previewImage?.alt}
        onClose={() => setPreviewImage(null)}
      />
    </section>
  );
}

export default SelectedWork;
