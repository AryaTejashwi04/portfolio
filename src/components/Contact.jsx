export default function Contact({ email, profiles }) {
  return (
    <section id="contact" className="py-24 px-5 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
        <p className="text-zinc-400 mb-8">Open to opportunities and collaborations.</p>
        <a href={`mailto:${email}`} className="inline-block px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-medium transition-colors mb-8">{email}</a>
        <div className="flex flex-wrap justify-center gap-3">
          {profiles.map(p => (<a key={p.label} href={p.url} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-zinc-800 hover:border-indigo-500 hover:text-indigo-400 text-sm transition-colors">{p.label}</a>))}
        </div>
      </div>
    </section>
  )
}
