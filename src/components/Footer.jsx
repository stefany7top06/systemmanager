export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/45 text-sm">© {new Date().getFullYear()} System Manager. Todos os direitos reservados.</p>
        <a
          href="https://systemmanager.com.br/"
          target="_blank"
          rel="noreferrer"
          className="text-white/60 hover:text-white text-sm transition-colors"
        >
          systemmanager.com.br
        </a>
      </div>
    </footer>
  )
}
