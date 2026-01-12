import "./App.css";
import PortfolioPage from "./components/PortfolioPage";
import profileImage from "./assets/my_profile.jpg";
import HTMLImage from "./assets/html_img.png";
import CSSImage from "./assets/css_image.png";
import bootstrapImage from "./assets/bootstrap_image.png";
import javaScriptImage from "./assets/javascript_image.png";
import jQueryImage from "./assets/jquery.png";
import SQLImage from "./assets/sql.png";
import gitGithubImage from "./assets/git_github.png";
import viteImage from "./assets/vite.png";
import figmaImage from "./assets/figma.png";

function App() {
  // Define the generalInfo Object for fatching data
  const generalInfo = {
    name: "Maryam Arif",
    profileImage: profileImage,
    headline:
      "Crafting fast, accessible, and modern web interfaces that users love to use.",
    subHeadline:
      "I’m a frontend developer with a computer science background, specializing in React and modern UI systems. I build performant, scalable, and user-focused interfaces.",
    aboutMe: `Hi, I’m Maryam, a frontend developer with a computer science
          background who enjoys turning complex ideas into clean, intuitive web
          experiences. I was drawn to development when I realized how thoughtful
          interfaces can make technology feel simple and human—even for
          non-technical users. Today, I focus on building modern React
          applications that are fast, accessible, and easy to scale. I care
          deeply about performance, usability, and inclusive design, and I enjoy
          optimizing interfaces so users can move through them effortlessly and
          confidently. Beyond code, I have a strong interest in visual clarity
          and minimal design—I enjoy refining small details until an interface
          feels just right. For me, frontend development is where logic meets
          creativity, and that balance is what keeps me motivated to grow every
          day.`,
    skills: [
      { name: "HTML", icon: HTMLImage },
      { name: "CSS", icon: CSSImage },
      { name: "Bootstrap", icon: bootstrapImage },
      { name: "JavaScript", icon: javaScriptImage },
      { name: "jQuery", icon: jQueryImage },
      { name: "SQL", icon: SQLImage },
    ],
    tools: [
      { name: "Git & GitHub", icon: gitGithubImage },
      { name: "Vite", icon: viteImage },
      { name: "Figma", icon: figmaImage },
    ],
    projects: [
      {
        title: "My 🏡 Farza",
        teckStackTaks: "HTML, CSS & JavaScript",
        link: "#",
      },
      {
        title: "Kanz Al Thahabi",
        teckStackTaks: "HTML, CSS & JavaScript",
        link: "#",
      },
    ],
    contact: {
      email: "maryamarifgcc@gmail.com",
      gitHubLink: "#",
      linkedInLink: "#",
      location: "Kabul, Afghanistan",
    },
  };
  return (
    // in here i well return JSX code
    <div>
      <PortfolioPage info={generalInfo}></PortfolioPage>
    </div>
  );
}
export default App;
