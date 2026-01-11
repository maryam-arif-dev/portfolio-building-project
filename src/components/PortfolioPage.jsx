export default function PortfolioPage() {
  return (
    <dev className="general-body-container">
      {/* Header Section */}
      <header>
        <div className="general-header-container">
          <div className="logo-column">
            <h1>Maryam Arif</h1>
          </div>
          <div class="navbar-column active">
            <nav>
              <ul class="nav-links">
                <li>
                  <a href="#" class="active-class-ul-li">
                    About
                  </a>
                </li>
                <li>
                  <a href="">Skills and tools</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Contact Me</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {/* Profile Section */}
      <div className="profile-conatainer">
        <div className="profile-image-column">
          <img className="profile-image" src="#" alt="Maryam Arif" />
        </div>
        <div className="headline-column">
          <h2>
            Crafting fast, accessible, and modern web interfaces that users love
            to use.
          </h2>
          <p>
            I’m a frontend developer with a computer science background,
            specializing in React and modern UI systems. I build performant,
            scalable, and user-focused interfaces.
          </p>
          <button className="general-button-style">See My GitHub</button>
        </div>
      </div>
    </dev>
  );
}
