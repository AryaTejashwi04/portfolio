export default function Experience({ items }) {
  return (
    <section id="experience" className="py-24 px-5 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        <div className="space-y-12">
          {items.map((e, i) => (
            <div key={i} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
              <div className="text-sm text-zinc-500">{e.period}<br />{e.location}</div>
              <div>
                <h3 className="text-xl font-semibold">{e.role}</h3>
                <p className="text-indigo-400 text-sm mb-4">{e.company}</p>
                <ul className="space-y-2 text-zinc-400">
                  {e.bullets.map((b, j) => (<li key={j} className="flex gap-3"><span className="text-indigo-500 mt-1">▸</span><span>{b}</span></li>))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
