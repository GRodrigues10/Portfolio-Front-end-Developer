// Section3.jsx
import React from "react";
import { StylesSection3 } from "./Styles";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiSass,
  SiStyledcomponents,
} from "react-icons/si";

const skills = [
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "CSS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiNodedotjs />, name: "Node" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiSass />, name: "Sass" },
  { icon: <SiStyledcomponents />, name: "Styled Components" },
];

function Section3() {
  return (
    <StylesSection3 id="habilidades">
      <div className="content-section">
        <h1>Habilidades</h1>
        <div className="skills">
          {skills.map((skill, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </StylesSection3>
  );
}

export default Section3;
