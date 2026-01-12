import ToolSectionCard from "./ToolSectionCards";

export default function ToolSection({ infoTools }) {
  return (
    // Tools Section
    <div className="general-tools-container">
      <div className="tools-header">
        <h1>Tools</h1>
      </div>
      <div className="tools-description">
        <p>
          I use a modern frontend toolchain to build, version, and design
          user-focused applications efficiently. Git & GitHub help me manage
          code and collaborate effectively, Vite enables fast development and
          optimized builds, and Figma allows me to design and refine clean,
          user-friendly interfaces before implementation.
        </p>
      </div>
      <div className="tools-items">
        {/* Accessing to data Through Map */}
        {/* {infoTools.map((tools, index) => (
          <ToolSectionCard
            key={index}
            name={tools.name}
            icon={tools.icon}
          ></ToolSectionCard>
        ))} */}
        {/* Accessing to data through index number */}
        <ToolSectionCard name={infoTools[0].name} icon={infoTools[0].icon} />
        <ToolSectionCard name={infoTools[1].name} icon={infoTools[1].icon} />
        <ToolSectionCard name={infoTools[2].name} icon={infoTools[2].icon} />
      </div>
    </div>
  );
}
