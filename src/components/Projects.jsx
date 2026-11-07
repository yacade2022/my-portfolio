import { FaGithub, FaExternalLinkAlt, FaCheck } from 'react-icons/fa'
import { projects } from '../data'
import SectionHeading from './SectionHeading'

const Projects = () => {
  return (
    <section id="projects" className="align-element py-24">
      <SectionHeading eyebrow="03 / work" title="My Projects" />
      <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map(({ id, title, subtitle, description, highlights, image, tech, live, source }, i) => (
          <li
            key={id}
            data-aos="fade-up"
            data-aos-delay={(i % 3) * 100}
            className="card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:border-fuchsia-500/50"
          >
            <div className="aspect-video overflow-hidden bg-slate-800">
              {image ? (
                <img
                  src={image}
                  alt={`${title} project preview`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="grid h-full w-full place-items-center bg-gradient-to-br from-fuchsia-600/40 via-slate-900 to-slate-950 transition duration-500 group-hover:scale-105"
                >
                  <span className="font-display text-3xl font-bold text-slate-50">{title}</span>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold text-slate-50">{title}</h3>
              {subtitle && <p className="mt-1 text-sm text-fuchsia-400">{subtitle}</p>}
              {description && <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>}
              {highlights?.length > 0 && (
                <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
                  {highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <FaCheck className="mt-1 h-3 w-3 shrink-0 text-fuchsia-400" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {tech.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex gap-3 pt-6">
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${title} live demo (opens in new tab)`}
                  className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-500"
                >
                  <FaExternalLinkAlt className="h-3 w-3" aria-hidden="true" />
                  Live demo
                </a>
                <a
                  href={source}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${title} source code on GitHub (opens in new tab)`}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-fuchsia-400 hover:text-fuchsia-400"
                >
                  <FaGithub className="h-4 w-4" aria-hidden="true" />
                  Code
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
