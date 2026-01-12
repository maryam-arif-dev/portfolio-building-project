export default function ProjectSectionCards({ title, description, link }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <iframe src={link} frameborder="0"></iframe>
      <br />
      <a href={link}>Read More</a>
    </div>
  );
}
