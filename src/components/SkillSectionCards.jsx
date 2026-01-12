export default function SkillSectionCards({ name, icon }) {
  return (
    <div className="skill-card">
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
  );
}
