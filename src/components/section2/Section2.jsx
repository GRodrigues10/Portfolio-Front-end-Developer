import React from "react";
import { StylesSection2 } from "./Styles";

function Section2() {
  return (
    <StylesSection2 id="sobre">
      <div className="content-section">
        <h1>
          Sobre <span>Mim</span>
        </h1>
        <p>
          Meu nome é Gabriel da Costa Rodrigues, tenho <span>23 anos</span> e
          sou formado em <span>Análise e Desenvolvimento de Sistemas</span>.
          Minha primeira experiência profissional foi como{" "}
          <span>editor de vídeo</span>, atuando por 5 anos como autônomo, o que
          me permitiu desenvolver disciplina, criatividade e atenção a detalhes.
          Atualmente, estou migrando para a área de <span> Desenvolvedor Full Stack</span>, com
          experiência prática em projetos de desenvolvimento de interfaces. Sou
          dedicado, adaptável e motivado a crescer na área de tecnologia,
          contribuindo com soluções criativas e eficientes.
        </p>

        <div className="boxs">
          <div className="p1">
            <h3>Educação</h3>
            <li>Colégio Santa Terezinha (Ensino Médio | 2017 - 2019)</li>
            <li>Universidade La Salle (Tecnólogo em ADS | 2023 - 2024)</li>
          </div>

          <div className="p2">
            <h3>Experiências</h3>
            <li>Editor de Vídeo (Autônomo | 2019 - 2025)</li>
            <li>Desenvolvedor Front-end ( Freelance | 2024 - Presente)</li>
          </div>

          <div className="p3">
            <h3>Cursos</h3>
            <li>Curso de Html5, CSS3 e JavaScript</li>
            <li>Curso de React.js e Next.js</li>
            <li>Curso de Node JS e TypeScript </li>
          </div>

       <div className="p4">
  <h3>Objetivos</h3>
  <li>Contribuir com soluções eficientes e criativas em projetos Front-end e Back-end</li>
  <li>Ajudar a resolver problemas enquanto agrego valor à equipe e à empresa</li>
</div>
        </div>
      </div>
    </StylesSection2>
  );
}

export default Section2;
