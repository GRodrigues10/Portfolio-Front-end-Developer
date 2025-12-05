import React from "react";
import { StylesSection4 } from "./Styles";
import produtime from "../../assets/produ.png";
import astro from "../../assets/astro3.png";
import converter from "../../assets/converter.png";
import starwars from "../../assets/lightsaber.png";
import net from "../../assets/net.png";
import shop6 from "../../assets/shop_image6.png";
import dashboard from "../../assets/d3.png";
import { useNavigate } from "react-router-dom";

function Section4() {
  const navigate = useNavigate();
  const seeMore = () => {
    navigate("/details");
  };

  const msgAlert = () => {
    alert("Esse é um projeto puramente Back-end!");
  };

  const inProgress = () => {
    alert("Esse projeto ainda está em desenvolvimento!");
  };

  return (
    <StylesSection4 id="projetos">
      <div className="content-section">
        <h1>Projetos</h1>
        <div className="cards">
          <div className="card">
            <h3>Dashboard de Vendas</h3>
            <img src={dashboard} alt="Capa do E-Commerce" />

            <p>
              Dashboard responsivo full stack com login e cadastro, modo claro/escuro,
              gráficos interativos e suporte a múltiplos idiomas.
            </p>
            <div className="tech">
              <p>Next JS</p>
              <p>TypeScript</p>
              <p>Styled Components</p>
              <p>I18n</p>
              <p>Recharts</p>
              <p>MongoDB</p>
              <p>Node JS</p>
              <p>Jest</p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/GRodrigues10/Dashboard-Next"
                target="_blank"
              >
                <button>Github</button>
              </a>
              <a
                href="https://dashboard-next-theta-orpin.vercel.app/"
                target="_blank"
              >
                <button>Deploy</button>
              </a>
            </div>
          </div>

          <div className="card">
            <h3>FullShop</h3>
            <img src={shop6} alt="Capa do E-Commerce" />

            <p>
              Projeto de e-commerce full stack com Next.js, TypeScript e
              Node.js, com carrinho, busca, produtos em destaque e integração
              completa.
            </p>
            <div className="tech">
              <p>Next JS</p>
              <p>TypeScript</p>
              <p>Styled Components</p>
              <p>Insomnia</p>
              <p>MongoDB</p>
              <p>Node JS</p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/GRodrigues10/E-Commerce"
                target="_blank"
              >
                <button>Github</button>
              </a>
              <a
                href="https://e-commerce-tan-gamma-27.vercel.app/"
                target="_blank"
              >
                <button>Deploy</button>
              </a>
            </div>
          </div>

          <div className="card">
            <h3>Netflix Clone</h3>
            <img src={net} alt="Capa da Netfix" />

            <p>
              Clone da Netflix em React, modular e responsivo, integrado à API
              TMDB para exibir filmes, séries e detalhes com design moderno e
              otimizado.
            </p>
            <div className="tech">
              <p>React JS</p>
              <p>JavaScript</p>
              <p>Styled Components</p>
              <p>React Router</p>
              <p>APIs RESTful</p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/GRodrigues10/Movies-ReactJS"
                target="_blank"
              >
                <button>Github</button>
              </a>
              <a
                href="https://grodrigues10.github.io/Movies-ReactJS/"
                target="_blank"
              >
                <button>Deploy</button>
              </a>
            </div>
          </div>

          <div className="card">
            <h3>StarApp</h3>
            <img src={starwars} alt="Capa do Star Wars" />

            <p>
              App web de Star Wars full stack, exibindo filmes e séries,
              mostrando detalhes de cada título em interface moderna e
              responsiva.
            </p>
            <div className="tech">
              <p>Next JS</p>
              <p>TypeScript</p>
              <p>Styled Components</p>
              <p>Insomnia</p>
              <p>MongoDB</p>
              <p>Node JS</p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/GRodrigues10/Star-Wars-App"
                target="_blank"
              >
                <button>Github</button>
              </a>

              <a
                href="https://star-wars-app-sandy-delta.vercel.app"
                target="_blank"
              >
                <button>Deploy</button>
              </a>
            </div>
          </div>
          <div className="card">
            <h3>AstroLens</h3>
            <img src={astro} alt="Capa do AstroLens" />
            {/* <div className="img">

            </div> */}

            <p>
              Aplicação web em React que explora astronomia: planetas, imagens
              da NASA, APOD e clima espacial, com design moderno e intuitivo.
            </p>
            <div className="tech">
              <p>React JS</p>
              <p>JavaScript</p>
              <p>Styled Components</p>
              <p>React Router</p>
              <p>APIs RESTful</p>
              <p>LocalStorage</p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/GRodrigues10/AstroLens"
                target="_blank"
              >
                <button>Github</button>
              </a>
              <a
                href="https://grodrigues10.github.io/AstroLens/"
                target="_blank"
              >
                <button>Deploy</button>
              </a>
            </div>
          </div>
          <div className="card">
            <h3>Produtime</h3>
            <img src={produtime} alt="Capa do Produtime" />

            <p>
              App web responsivo para organizar tarefas, acompanhar progresso e
              otimizar tempo, ideal para profissionais focados e produtivos.
            </p>
            <div className="tech">
              <p>React JS</p>
              <p>JavaScript</p>
              <p>Styled Components</p>
              <p>React Router</p>
              <p>UuID</p>
              <p>LocalStorage</p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/GRodrigues10/produtime-reactjs"
                target="_blank"
              >
                <button>Github</button>
              </a>
              <a
                href="https://grodrigues10.github.io/produtime-reactjs/"
                target="_blank"
              >
                <button>Deploy</button>
              </a>
            </div>
          </div>
        </div>
        <div className="see-more">
          <button onClick={seeMore}>Ver Mais</button>
        </div>
      </div>
    </StylesSection4>
  );
}

export default Section4;
