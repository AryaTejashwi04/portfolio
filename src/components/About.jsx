export default function About({ text }) {
  return (
    <section id="about" className="py-24 px-5 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About</h2>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">{text}</p>
      </div>
    </section>
  )
}
