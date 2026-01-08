import "./App.css";
import PortfolioPage from "./components/PortfolioPage";
function App() {
  // Define the generalInfo Object for fatching data
  const generalInfo = {
    name: "Maryam Arif",
    logo: "",
    headline:
      "Building performant, accessible web experiences that drive user engagement",
    subHeadline: "",
    aboutMe: "",
    skils: [
      { name: "HTML", icon: "" },
      { name: "CSS", icon: "" },
      { name: "Bootstrap", icon: "" },
      { name: "JavaScript", icon: "" },
      { name: "jQuery", icon: "" },
      { name: "SQL", icon: "" },
      { name: "PHP", icon: "" },
      { name: "React", icon: "" },
    ],
    tools: [
      { name: "Git & GitHub", icon: "" },
      { name: "Vite", icon: "" },
      { name: "Figma", icon: "" },
    ],
    projects: [
      { title: "", teckStackTaks: "", link: "" },
      { title: "", teckStackTaks: "", link: "" },
      { title: "", teckStackTaks: "", link: "" },
    ],
    contact: {
      email: "maryamarifgcc@gmail.com",
      gitHubLink: "",
      linkedInLink: "",
      location: "Kabul, Afghanistan",
    },
  };
  return (
    // in here i well return JSX code
    <div>
      <PortfolioPage></PortfolioPage>
    </div>
  );
}
export default App;
