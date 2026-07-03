export function Nav() {
  return (
    <header className="nav" id="nav">
      <div className="wrap nav-in">
        <a href="#top" className="brand">
          proova<b>.</b>
        </a>
        <nav className="nav-links">
          <a href="/#features">Funciones</a>
          <a href="/#how">Cómo funciona</a>
          <a href="/#privacy">Privacidad</a>
          <a href="/#download" className="btn btn-primary">
            Descárgala
          </a>
        </nav>
      </div>
    </header>
  );
}
