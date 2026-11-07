import { skills } from '../data'
import SectionHeading from './SectionHeading'

const Skills = () => {
  return (
    <section id="skills" className="align-element py-24">
      <SectionHeading eyebrow="02 / skills" title="My Skills" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ id, title, icon: Icon, items }, i) => (
          <article
            key={id}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="card p-6 transition hover:-translate-y-1 hover:border-fuchsia-500/50"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-fuchsia-500/10 text-fuchsia-400">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-semibold text-slate-50">{title}</h3>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
