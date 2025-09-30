import { MdOutlineSearch, MdSpeed, MdAnalytics } from "react-icons/md"
import { FaUniversalAccess, FaHtml5, FaCss3Alt, FaReact, FaNode } from "react-icons/fa"
import { SiJavascript, SiCanva, SiGithub, SiGoogleanalytics } from "react-icons/si"
import { FaPalette } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import "../styles/sections/Skills.css"

function Skills() {
  return (
    <section className="skills-page">

       <h1> lol je n'arrive pas a choisir entre les 2</h1>
      <h2 className="skills-title">Compétences & Outils</h2>
      <p className="skills-intro">
        J’aime créer des sites modernes, rapides et optimisés, en utilisant les bons outils au bon moment.
      </p>

      <div className="skills-grid">

        {/* Bloc Dev Web */}
        <div className="skill-card">
          <h2>Développement Web</h2>
          <ul>
            <li><FaHtml5 /> HTML5</li>
            <li><FaCss3Alt /> CSS3 </li>
            <li><SiJavascript /> JavaScript</li>
            <li><FaReact /> React & Vite</li>
            <li><FaNode /> Node.js</li>
          </ul>
        </div>

        {/* Bloc SEO */}
        <div className="skill-card">
          <h2>SEO & Optimisation</h2>
          <ul>
            <li><MdOutlineSearch /> SEO on-page</li>
            <li><MdSpeed /> Performance (PageSpeed, Lighthouse)</li>
            <li><FaUniversalAccess /> Accessibilité</li>
            <li><MdAnalytics /> Analytics & Search Console</li>
             <li><SiGoogleanalytics /> Google Analytics</li>
          </ul>
        </div>

        {/* Bloc Outils */}
        <div className="skill-card">
          <h2>Outils & process</h2>
          <ul>
            <li><SiGithub /> Git & GitHub</li>
           
            <li><BiLogoVisualStudio /> VS Code</li>
            <li><SiCanva /> Canva</li>
            <li><FaPalette /> Procreate</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Skills
