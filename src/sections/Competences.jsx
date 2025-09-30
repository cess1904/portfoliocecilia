import '../styles/sections/Competences.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa'
import { SiVite, SiCanva } from 'react-icons/si'
import { BiLogoVisualStudio } from "react-icons/bi";
import { MdOutlineSearch } from 'react-icons/md' // pour SEO (loupe)
import { FiPenTool } from 'react-icons/fi' // pour UX/UI (icône design)
import { FaPalette } from "react-icons/fa";
import {  MdSpeed, MdAnalytics } from "react-icons/md";
import { FaUniversalAccess } from "react-icons/fa";
{/* import { SiNextdotjs } from "react-icons/si";  ✅ logo officiel Next.js
import { SiNextdotjs, SiGatsby } from "react-icons/si";*/ } 







function Competences() {
  return (
   <section className="competences">
  <h2 className="competences-title">Compétences & Outils</h2>

  <div className="competences-content">
    {/* Bloc Développement web */}
    <div className="competences-block">
      <h3 className="competences-subtitle">Développement web</h3>
      <ul className="competences-list">
        <li className="competence-item"><FaHtml5 /> HTML</li>
        <li className="competence-item"><FaCss3Alt /> CSS</li>
        <li className="competence-item"><FaJs /> JavaScript</li>
        <li className="competence-item"><FaReact /> React</li>
        <li className="competence-item"><SiVite /> Vite</li>
        <li className="competence-item"><BiLogoVisualStudio /> VS Code</li>
        <li className="competence-item"><FaGithub /> GitHub</li>
      </ul>
    </div>
        {/* Bloc SEO & optimisation */}
    <div className="competences-block">
      <h3 className="competences-subtitle">SEO & optimisation</h3>
      <ul className="competences-list">
        <li className="competence-item"><MdOutlineSearch /> SEO</li>
        <li className="competence-item"><MdSpeed /> Performance</li>
       <li className="competence-item"><FaUniversalAccess/> Accessibilité</li>
       <li className="competence-item"><MdAnalytics /> Analytics</li>
      

       {/*pour la suite 
       <li className="competence-item"><SiNextdotjs /> Next.js</li>
        <li className="competence-item"><SiGatsby /> Gatsby</li>
       */}
       
      </ul>
    </div>
      {/* Bloc Création & design */}
    <div className="competences-block">
      <h3 className="competences-subtitle">Création & design</h3>
      <ul className="competences-list">
        <li className="competence-item"><SiCanva /> Canva</li>
        <li className="competence-item"><FiPenTool /> UX / UI</li>
        <li className="competence-item"><FaPalette /> Procreate</li>
      </ul>
    </div>
  </div>
</section>
  )
}

export default Competences
