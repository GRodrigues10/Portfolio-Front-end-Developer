import React from "react";
import { StylesSection4 } from "./Styles";
import astro from "../../assets/astrolens.png";
import produtime from "../../assets/produtime-logo.png";
import netflix from "../../assets/projeto-netflix.jpg";
import { SiGithub } from "react-icons/si";

function Section4() {
  return (
    <StylesSection4 id="projetos">
      <div className="content-section">
        <h1>Projetos</h1>
        <div className="cards">
          <div className="card">
            <h3>AstroLens</h3>
            <img src={astro} alt="Capa do AstroLens" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              pariatur eos suscipit necessitatibus saepe. Deserunt numquam
              voluptate minus eveniet quasi.
            </p>
            <div className="tech">
              <p>React JS</p>
              <p>Styled Components</p>
              <p>React Router</p>
              <p>APIs RESTful</p>
              <p>Mobile First</p>
              <p>LocalStorage</p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>

          <div className="card">
            <h3>Netflix-Clone</h3>
            <img src={netflix} alt="Capa da Netfix" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              pariatur eos suscipit necessitatibus saepe. Deserunt numquam
              voluptate minus eveniet quasi.
            </p>
            <div className="tech">
              <p>React JS</p>
              <p>Styled Components</p>
              <p>React Router</p>
              <p>Mobile First</p>
              <p>APIs RESTful</p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>

          <div className="card">
            <h3>Produtime</h3>
            <img src={produtime} alt="Capa do Produtime" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              pariatur eos suscipit necessitatibus saepe. Deserunt numquam
              voluptate minus eveniet quasi.
            </p>
            <div className="tech">
              <p>React JS</p>
              <p>Styled Components</p>
              <p>React Router</p>
              <p>Mobile First</p>
              <p>UuID</p>
              <p>LocalStorage</p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>
          <div className="card">
            <h3>Confeitaria Online</h3>
            <img src={netflix} alt="Capa da Netfix" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              pariatur eos suscipit necessitatibus saepe. Deserunt numquam
              voluptate minus eveniet quasi.
            </p>
            <div className="tech">
              <p>HTML5</p>
              <p>BootStrap 5</p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>
          <div className="card">
            <h3>API de Filmes</h3>
            <img src={netflix} alt="Capa da Netfix" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              pariatur eos suscipit necessitatibus saepe. Deserunt numquam
              voluptate minus eveniet quasi.
            </p>
            <div className="tech">
              <p>JavaScript</p>
              <p>MongoDB</p>
              <p>Express</p>
              <p>Insommia</p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>
          <div className="card">
            <h3>Catify</h3>
            <img src={netflix} alt="Capa da Netfix" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              pariatur eos suscipit necessitatibus saepe. Deserunt numquam
              voluptate minus eveniet quasi.
            </p>
            <div className="tech">
                <p>HTML5</p>
              <p>CSS3</p>
                <p>JavaScript</p>
              <p>APIs RESTful</p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>
        </div>
        <div className="see-more">
            <button>Ver Mais</button>
        </div>
      </div>
    </StylesSection4>
  );
}

export default Section4;
