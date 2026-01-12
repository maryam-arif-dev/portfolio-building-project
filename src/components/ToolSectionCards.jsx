export default function ToolSectionCard({ name, icon }) {
  return (
    <div className="tools-card">
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
  );
}
