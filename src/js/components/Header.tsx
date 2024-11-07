export function Header() {
  // * Render
  return (
    <header>
      <div className="container">
        <div className="row">
          <h1 className="col-9 col-lg-6">Jérémy Courtaban</h1>
          <nav id="menu" className="col-9 col-md-6">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#websites">Web sites</a>
              </li>
              <li>
                <a href="#procedures">Procedures</a>
              </li>
              <li>
                <a href="#refs">References</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
            </ul>
          </nav>
          <nav id="menu_mobile_bouton" className="col-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z" />
            </svg>
          </nav>
        </div>
      </div>
    </header>
  );
}
