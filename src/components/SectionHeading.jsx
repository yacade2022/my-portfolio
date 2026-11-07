import PropTypes from 'prop-types'

const SectionHeading = ({ eyebrow, title }) => (
  <div data-aos="fade-up" className="mb-12 md:mb-16">
    <p className="font-mono text-sm tracking-wider text-fuchsia-400">{eyebrow}</p>
    <h2 className="mt-2 font-display text-3xl font-bold text-slate-50 md:text-4xl">{title}</h2>
    <div className="mt-4 h-1 w-12 rounded-full bg-fuchsia-500" aria-hidden="true" />
  </div>
)

SectionHeading.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default SectionHeading
