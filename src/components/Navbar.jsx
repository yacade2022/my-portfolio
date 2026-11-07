import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { links, NAV_OFFSET } from '../data'

const Logo = () => (
  <a href="#top" className="font-display text-xl font-bold text-slate-50">
    AmineWeb<span className="text-fuchsia-400">Dev</span>
  </a>
)

const NavLinks = ({ onNavigate, className, linkClassName }) => (
  <ul className={className}>
    {links.map(({ id, text }) => (
      <li key={id}>
        <Link
          to={id}
          href={`#${id}`}
          spy
          smooth
          offset={NAV_OFFSET}
          duration={500}
          activeClass="!text-fuchsia-400"
          onClick={onNavigate}
          className={linkClassName}
        >
          {text}
        </Link>
      </li>
    ))}
  </ul>
)

NavLinks.propTypes = {
  onNavigate: PropTypes.func,
  className: PropTypes.string,
  linkClassName: PropTypes.string,
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Main" className="align-element flex h-[72px] items-center justify-between">
        <Logo />

        <NavLinks
          className="hidden items-center gap-8 sm:flex"
          linkClassName="cursor-pointer text-sm font-medium text-slate-300 transition-colors hover:text-fuchsia-400"
        />

        <button
          type="button"
          className="-mr-2 rounded-md p-2 text-slate-200 sm:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="align-element pb-4 sm:hidden">
          <NavLinks
            onNavigate={() => setOpen(false)}
            className="flex flex-col gap-1"
            linkClassName="block cursor-pointer rounded-md px-3 py-3 font-medium text-slate-200 hover:bg-slate-800"
          />
        </div>
      )}
    </header>
  )
}

export default Navbar
