export default function Achievements({ items }) {
  return (
    <section id="achievements" className="py-24 px-5 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Coding Achievements</h2>
        <ul className="space-y-4">
          {items.map((a, i) => (
            <li key={i} className="flex gap-3 text-lg text-zinc-300">
              <span className="text-indigo-500 mt-1">▸</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
