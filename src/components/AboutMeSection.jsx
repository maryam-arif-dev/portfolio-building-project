export default function AboutMeSection({ about }) {
  return (
    // About Me Section
    <div className="about-me-container" id="about_me">
      <div className="about-me-column">
        <h1>About Me</h1>
        <p>{about}</p>
      </div>
    </div>
  );
}
