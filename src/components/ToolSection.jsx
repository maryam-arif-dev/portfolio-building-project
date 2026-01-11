export default function ToolSection() {
  return (
    // Tools Section
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
  );
}
