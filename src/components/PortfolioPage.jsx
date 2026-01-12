import AboutMeSection from "./AboutMeSection";
import FooterSection from "./FooterSection";
import HeaderSection from "./HeaderSection";
import ProfileSection from "./ProfileSection";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";
import ToolSection from "./ToolSection";

export default function PortfolioPage({ info }) {
  return (
    <div className="general-body-container">
      {/* Header Section */}
      <HeaderSection name={info.name}></HeaderSection>
      {/* Profile Section */}
      <ProfileSection
        headline={info.headline}
        subHeadline={info.subHeadline}
        image={info.profileImage}
      ></ProfileSection>
      {/* About Me Section  */}
      <AboutMeSection about={info.aboutMe}></AboutMeSection>
      {/* Skills Section  */}
      <SkillSection infoSkill={info.skills}></SkillSection>
      {/* Tools  */}
      <ToolSection infoTools={info.tools}></ToolSection>
      {/* Projects  */}
      <ProjectSection infoProjects={info.projects}></ProjectSection>
      {/* Contact Info /Footer Section  */}
      <FooterSection
        email={info.contact.email}
        linkedInLink={info.contact.linkedInLink}
        gitHubLink={info.contact.gitHubLink}
        location={info.contact.location}
      ></FooterSection>
    </div>
  );
}
