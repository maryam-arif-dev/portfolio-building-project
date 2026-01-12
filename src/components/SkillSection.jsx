import SkillSectionCards from "./SkillSectionCards";

export default function SkillSection({ infoSkill }) {
  return (
    // Skills Sections
    <div className="general-skills-container" id="skill">
      <div className="skill-header">
        <h1>My Skills</h1>
        <div className="skill-items">
          {infoSkill.map((skills, index) => (
            <SkillSectionCards
              key={index}
              name={skills.name}
              icon={skills.icon}
            ></SkillSectionCards>
          ))}
        </div>
      </div>
    </div>
  );
}
