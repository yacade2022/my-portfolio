import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { contact } from '../data'
import SectionHeading from './SectionHeading'

// Formspree form ID (the part after /f/ in your form's endpoint), set in .env.local:
//   VITE_FORMSPREE_ID=xxxxxxxx
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

const initial = { name: '', email: '', message: '', _gotcha: '' }

const Contact = () => {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Fallback when no Formspree ID is configured: open the visitor's mail client.
  const sendViaMailto = () => {
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setStatus('success')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!FORMSPREE_ID) return sendViaMailto()

    setStatus('sending')
    setError('')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio contact from ${form.name}`,
          _gotcha: form._gotcha,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm(initial)
      } else {
        const data = await res.json().catch(() => ({}))
        setError(data.errors?.map((err) => err.message).join(', ') || '')
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const details = [
    { icon: FaEnvelope, label: contact.email, href: `mailto:${contact.email}` },
    { icon: FaMapMarkerAlt, label: contact.location },
  ]

  const sending = status === 'sending'

  return (
    <section id="contact" className="align-element py-24">
      <SectionHeading eyebrow="04 / contact" title="Contact Me" />
      <div className="grid gap-12 lg:grid-cols-5">
        <div data-aos="fade-right" className="lg:col-span-2">
          <p className="text-lg leading-relaxed text-slate-400">
            Have a project in mind or an opportunity to discuss? Send me a message and I&apos;ll get
            back to you.
          </p>
          <ul className="mt-8 space-y-4">
            {details.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-fuchsia-500/10 text-fuchsia-400">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {href ? (
                  <a href={href} className="text-slate-200 transition hover:text-fuchsia-400">
                    {label}
                  </a>
                ) : (
                  <span className="text-slate-200">{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form data-aos="fade-left" onSubmit={handleSubmit} className="card space-y-5 p-6 lg:col-span-3 md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="label">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required value={form.name} onChange={update} className="field" />
            </div>
            <div>
              <label htmlFor="email" className="label">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={update} className="field" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="label">Message</label>
            <textarea id="message" name="message" rows="6" required value={form.message} onChange={update} className="field resize-y" />
          </div>
          {/* Honeypot: hidden from people, bots fill it and Formspree drops the submission */}
          <input
            type="text"
            name="_gotcha"
            value={form._gotcha}
            onChange={update}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-lg bg-fuchsia-600 px-6 py-3 font-semibold text-white transition hover:bg-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? 'Sending…' : 'Send message'}
          </button>
          <p
            role="status"
            aria-live="polite"
            className={`text-center text-sm ${status === 'error' ? 'text-rose-400' : 'text-emerald-400'}`}
          >
            {status === 'success' &&
              (FORMSPREE_ID
                ? 'Thanks! Your message has been sent. I’ll get back to you soon.'
                : 'Your email app should open with the message ready to send.')}
            {status === 'error' && (
              <>
                {error || 'Something went wrong sending your message.'} You can also email me at{' '}
                <a href={`mailto:${contact.email}`} className="underline">
                  {contact.email}
                </a>
                .
              </>
            )}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
