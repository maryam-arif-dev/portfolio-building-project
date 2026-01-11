import AboutMeSection from "./AboutMeSection";
import FooterSection from "./FooterSection";
import HeaderSection from "./HeaderSection";
import ProfileSection from "./ProfileSection";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";
import ToolSection from "./ToolSection";

export default function PortfolioPage() {
  return (
    <dev className="general-body-container">
      {/* Header Section */}
      <HeaderSection></HeaderSection>
      {/* Profile Section */}
      <ProfileSection></ProfileSection>
      {/* About Me Section  */}
      <AboutMeSection></AboutMeSection>
      {/* Skills Section  */}
      <SkillSection></SkillSection>
      {/* Tools  */}
      <ToolSection></ToolSection>
      {/* Projects  */}
      <ProjectSection></ProjectSection>
      {/* Contact Info /Footer Section  */}
      <FooterSection></FooterSection>
    </dev>
  );
}
