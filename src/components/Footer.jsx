import { socials } from '../data'

const Footer = () => {
  return (
    <footer className="border-t border-slate-800">
      <div className="align-element flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-bold text-slate-50">
            AmineWeb<span className="text-fuchsia-400">Dev</span>
          </p>
          <p className="mt-1 text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Amine. Designed and developed by Amine.
          </p>
        </div>
        <ul className="flex items-center gap-2">
          {socials.map(({ id, label, href, icon: Icon }) => (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="block rounded-md p-2 text-slate-400 transition hover:text-fuchsia-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
