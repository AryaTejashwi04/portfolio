export default function Projects({ items }) {
  return (
    <section id="projects" className="py-24 px-5 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((p, i) => (
            <div key={i} className="border border-zinc-800 rounded-xl p-6 hover:border-indigo-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-zinc-400 mb-4 text-sm leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map(t => (<span key={t} className="text-xs px-2 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">{t}</span>))}
              </div>
              <div className="flex gap-4 text-sm">
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300">GitHub →</a>}
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300">Live →</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
