export default function Hero({ content }) {
  const { name, role, tagline, location, profiles } = content
  return (
    <section id="top" className="min-h-screen flex items-center px-5 pt-16">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-indigo-400 text-sm font-medium mb-3">{location}</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">{name}</h1>
        <h2 className="text-2xl md:text-3xl text-zinc-400 font-semibold mb-6">{role}</h2>
        <p className="text-lg text-zinc-400 max-w-2xl mb-8">{tagline}</p>
        <div className="flex flex-wrap gap-3">
          {profiles.map(p => (<a key={p.label} href={p.url} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-zinc-800 hover:border-indigo-500 hover:text-indigo-400 text-sm transition-colors">{p.label}</a>))}
        </div>
      </div>
    </section>
  )
}
