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
      {/* About Me Section  */}
      <div className="about-me-container">
        <div className="about-me-column">
          <h1>About Me</h1>
          <p>
            Hi, I’m Maryam, a frontend developer with a computer science
            background who enjoys turning complex ideas into clean, intuitive
            web experiences. I was drawn to development when I realized how
            thoughtful interfaces can make technology feel simple and human—even
            for non-technical users. Today, I focus on building modern React
            applications that are fast, accessible, and easy to scale. I care
            deeply about performance, usability, and inclusive design, and I
            enjoy optimizing interfaces so users can move through them
            effortlessly and confidently. Beyond code, I have a strong interest
            in visual clarity and minimal design—I enjoy refining small details
            until an interface feels just right. For me, frontend development is
            where logic meets creativity, and that balance is what keeps me
            motivated to grow every day.
          </p>
        </div>
      </div>
      {/* Skills Section  */}
      <div className="general-skills-container">
        <div className="skill-header">
          <h1>My Skills</h1>
        </div>
        <div className="skill-items">
          <div className="skill-card">
            <img src="#" alt="html" />
            <p>HTML</p>
          </div>
          <div className="skill-card">
            <img src="#" alt="html" />
            <p>CSS</p>
          </div>
          <div className="skill-card">
            <img src="#" alt="html" />
            <p>Bootstrap</p>
          </div>
          <div className="skill-card">
            <img src="#" alt="html" />
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <img src="#" alt="html" />
            <p>jQuery</p>
          </div>
          <div className="skill-card">
            <img src="#" alt="html" />
            <p>SQL</p>
          </div>
          <div className="skill-card">
            <img src="#" alt="html" />
            <p>PHP</p>
          </div>
          <div className="skill-card">
            <img src="#" alt="html" />
            <p>Python</p>
          </div>
        </div>
      </div>
      {/* Tools  */}
      <div className="general-tools-container">
        <div className="tools-header">
          <h1>Tools</h1>
        </div>
        <div className="tools-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            minima commodi iure nemo veniam aut reprehenderit quos quae sapiente
            maiores voluptate quam beatae eius adipisci ad voluptates nesciunt
            accusamus voluptatum!
          </p>
        </div>
        <div className="tools-items">
          <div className="tools-card">
            <img src="#" alt="Git & GitHub" />
            <p>Git & GitHub</p>
          </div>
          <div className="tools-card">
            <img src="#" alt="Vite" />
            <p>Vite</p>
          </div>
          <div className="tools-card">
            <img src="#" alt="Figma" />
            <p>Figma</p>
          </div>
        </div>
      </div>
      {/* Projects  */}
      <div className="general-project-container">
        <div className="project-header">Projects</div>
        <div className="project-items">
          <div className="project-card">
            <h2>First Project</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              nesciunt ab nulla cum tenetur suscipit? Molestiae, molestias minus
              expedita ipsa officia vitae esse, est temporibus minima qui
              consequuntur officiis totam.
            </p>
            <iframe src="#" frameborder="0"></iframe>
            <br />
            <a href="#">Read More</a>
          </div>
          <div className="project-card">
            <h2>Second Project</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              nesciunt ab nulla cum tenetur suscipit? Molestiae, molestias minus
              expedita ipsa officia vitae esse, est temporibus minima qui
              consequuntur officiis totam.
            </p>
            <iframe src="#" frameborder="0"></iframe>
            <br />
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      {/* Contact Info  */}
      <footer>
        <div className="general-contact-container">
          <a href="#">maryamarifgcc@gmail.com</a>
          <a href="#">Linkdin</a>
          <a href="#">GitHub</a>
          <p>Kabul, Afghanistan</p>
        </div>
      </footer>
    </dev>
  );
}
