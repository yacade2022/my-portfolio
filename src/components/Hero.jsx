import { Link } from 'react-scroll'
import { FaArrowRight } from 'react-icons/fa'
import { socials, contact, NAV_OFFSET } from '../data'

const Hero = () => {
  return (
    <section className="relative isolate">
      {/* soft accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl"
      />
      <div className="align-element flex min-h-[calc(100svh-72px)] flex-col justify-center py-20">
        <div data-aos="fade-up" className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-sm text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            Based in {contact.location}
          </p>

          <h1 className="mt-6 font-display text-5xl font-bold leading-tight tracking-tight text-slate-50 sm:text-6xl md:text-7xl">
            Hi, I&apos;m <span className="text-fuchsia-400">Amine</span>.
          </h1>
          <p className="mt-4 font-display text-2xl font-medium text-slate-300 sm:text-3xl">
            Junior Full Stack Web Developer
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Building comprehensive solutions from front-end to back-end with React, Node.js and
            MongoDB.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="projects"
              href="#projects"
              smooth
              offset={NAV_OFFSET}
              duration={500}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-lg bg-fuchsia-600 px-6 py-3 font-semibold text-white transition hover:bg-fuchsia-500"
            >
              View my work
              <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="contact"
              href="#contact"
              smooth
              offset={NAV_OFFSET}
              duration={500}
              className="inline-flex cursor-pointer items-center rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-fuchsia-400 hover:text-fuchsia-400"
            >
              Get in touch
            </Link>

            <div className="flex items-center gap-1 sm:ml-2">
              {socials.map(({ id, label, href, icon: Icon }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-md p-2 text-slate-400 transition hover:text-fuchsia-400"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
