export default function Footer({ name }) {
  return (<footer className="py-10 px-5 border-t border-zinc-900 text-center text-sm text-zinc-500">© {new Date().getFullYear()} {name}. Built with React + Tailwind.</footer>)
}
