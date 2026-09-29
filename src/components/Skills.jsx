export default function Skills({ groups }) {
  return (
    <section id="skills" className="py-24 px-5 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(groups).map(([cat, items]) => (
            <div key={cat}>
              <h3 className="text-sm uppercase tracking-wider text-indigo-400 mb-3">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(s => (<span key={s} className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm">{s}</span>))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
