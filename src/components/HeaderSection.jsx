export default function HeaderSection({ name }) {
  return (
    // Header Section
    <header>
      <div className="general-header-container">
        <div className="logo-column">
          <h1>{name}</h1>
        </div>
        <div class="navbar-column active">
          <nav>
            <ul class="nav-links">
              <li>
                <a href="#about_me" class="active-class-ul-li">
                  About
                </a>
              </li>
              <li>
                <a href="#skill">Skills and tools</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#footer">Contact Me</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
