import picture from '../assets/image/picture.jpg'
import SectionHeading from './SectionHeading'

const About = () => {
  return (
    <section id="about" className="align-element py-24">
      <SectionHeading eyebrow="01 / about" title="About Me" />
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div data-aos="fade-right" className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-br from-fuchsia-600/30 to-transparent blur-xl"
          />
          <img
            src={picture}
            alt="Code editor on a laptop screen"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-2xl border border-slate-800 object-cover"
          />
        </div>
        <div data-aos="fade-left" className="space-y-5 text-lg leading-relaxed text-slate-400">
          <p>
            I&apos;m a passionate <span className="text-slate-100">Junior Full Stack Developer</span>{' '}
            with a strong foundation in both front-end and back-end technologies. I&apos;m dedicated
            to creating efficient, beautiful, and user-friendly web applications.
          </p>
          <p>
            I&apos;m a quick learner and a team player, and I&apos;m confident in my ability to be a
            valuable asset to any web development team.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
