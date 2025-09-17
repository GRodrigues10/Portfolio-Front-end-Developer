import { StylesDetails } from "./Styles";
import produtime from "../../../assets/produ.png";
import astro from "../../../assets/astro3.png";
import file from "../../../assets/file2.png";
import starwars from "../../../assets/lightsaber.png";
import backend from "../../../assets/backend.png";
import cat from "../../../assets/cat6.png";
import cep from "../../../assets/cep3.png";
import clima from "../../../assets/clima2.png";
import cake from "../../../assets/cake.png";
import tech from "../../../assets/technology.png";
import cordel from "../../../assets/img_cordel.png";
import net from "../../../assets/net.png";
import { useNavigate } from "react-router-dom";

function Details() {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  // const inProgress = () => {
  //   alert("Esse projeto está em desenvolvimento!");
  // };

  const backend_ = () => {
    alert("Esse é um projeto puramente Back-end!");
  };

  return (
    <StylesDetails>
      <div className="content-section">
        <h1>Projetos</h1>
        <div className="cards">
          <div className="card">
            <h3>AstroLens</h3>
            <img src={astro} alt="Capa do AstroLens" />
            {/* <div className="img">
        
                    </div> */}

            <p>
              AstroLens é um app web em React que explora astronomia: planetas,
              imagens da NASA, APOD e clima espacial, com interface moderna e
              intuitiva.
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
            <h3>Netflix-Clone</h3>
            <img src={net} alt="Capa da Netfix" />

            <p>
              Clone da Netflix em React, modular e responsivo, integrado à API
              TMDB para exibir filmes, séries e detalhes com design moderno e
              otimizado.
            </p>
            <div className="tech">
              <p>React JS</p>
              <p>Styled Components</p>
              <p>React Router</p>
              <p>Mobile First</p>
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
              <p>Styled Components</p>
              <p>Insomnia</p>
              <p>MongoDB</p>
              <p>node JS</p>
              <p>APIs Restful</p>
            </div>
            <div className="btns">
               <a href="https://github.com/GRodrigues10/Star-Wars-App" target="_blank"><button>Github</button></a>
              <a href="star-wars-app-sandy-delta.vercel.app" target="_blank"><button>Deploy</button></a>
            </div>
          </div>
          <div className="card">
            <h3>API de Filmes</h3>
            <img src={backend} alt="Capa da API de Filmes" />

            <p>
              Projeto de API de séries feito na faculdade com Express.js e
              MongoDB, permitindo adicionar, listar, atualizar, excluir e
              agrupar séries RESTful.
            </p>
            <div className="tech">
              <p>JavaScript</p>
              <p>MongoDB</p>
              <p>Express</p>
              <p>Insommia</p>
              <p>Endpoints RESTful</p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/GRodrigues10/Projeto-API-Faculdade"
                target="_blank"
              >
                <button>Github</button>
              </a>
              <button onClick={backend_}>Deploy</button>
            </div>
          </div>
          <div className="card">
            <h3>Produtime</h3>
            <img src={produtime} alt="Capa do Produtime" />

            <p>
              Produtime é um app responsivo que ajuda a organizar tarefas,
              acompanhar progresso e otimizar tempo, ideal para profissionais
              focados e produtivos.
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
          <div className="card">
            <h3>Conversor de Arquivos</h3>
            <img src={file} alt="Capa do Conversor de Arquivos" />

            <p>
              App web que permite arrastar ou selecionar arquivos e convertê-los
              em TXT, CSV, JSON, PNG ou JPG, com interface simples e rápida.
            </p>
            <div className="tech">
              <p>React JS</p>
              <p>Styled Components</p>
              <p>React Router</p>
              <p>File-Saver</p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/GRodrigues10/File-Converter"
                target="_blank"
              >
                <button>Github</button>
              </a>
              <a
                href="https://grodrigues10.github.io/File-Converter/"
                target="_blank"
              >
                <button>Deploy</button>
              </a>
            </div>
          </div>

          <div className="card">
            <h3>Buscador de CEP</h3>
            <img src={cep} alt="Capa do Conversor de Arquivos" />

            <p>
              App web feito em React que retorna rapidamente endereços precisos,
              com interface intuitiva, responsiva e experiência fluida para o
              usuário.
            </p>
            <div className="tech">
              <p>React JS</p>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>API RESTful</p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/GRodrigues10/Projeto-Busca-CEP-ReactJS"
                target="_blank"
              >
                <button>Github</button>
              </a>
              <a
                href="https://grodrigues10.github.io/Projeto-Busca-CEP-ReactJS/"
                target="_blank"
              >
                <button>Deploy</button>
              </a>
            </div>
          </div>

          <div className="card">
            <h3>Catify</h3>
            <img src={cat} alt="Capa do Conversor de Arquivos" />

            <p>
              Catify é um site interativo que exibe fotos aleatórias de gatos de
              diversas raças, oferecendo diversão e descobertas para amantes de
              felinos.
            </p>
            <div className="tech">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
              <p>API RESTful</p>
            </div>
            <div className="btns">
              <a href="https://github.com/GRodrigues10/Catify" target="_blank">
                <button>Github</button>
              </a>
              <a href="https://grodrigues10.github.io/Catify/" target="_blank">
                <button>Deploy</button>
              </a>
            </div>
          </div>

          <div className="card">
            <h3>Buscador Climático</h3>
            <img src={clima} alt="Capa do Conversor de Arquivos" />

            <p>
              App web que mostra a previsão do tempo em qualquer cidade usando a
              API Weather, com design moderno, responsivo e fácil de usar.
            </p>
            <div className="tech">
              <p>React JS</p>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>API RESTful</p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/GRodrigues10/Projeto-Clima"
                target="_blank"
              >
                <button>Github</button>
              </a>
              <a
                href="https://grodrigues10.github.io/Projeto-Clima/"
                target="_blank"
              >
                <button>Deploy</button>
              </a>
            </div>
          </div>

          <div className="card">
            <h3>Projeto Tecnologia</h3>
            <img src={tech} alt="Capa do Conversor de Arquivos" />

            <p>
              Página web criada em HTML5 e CSS3 como exercício prático para
              curso em vídeo, demonstrando estrutura e estilo básicos de
              desenvolvimento web.
            </p>
            <div className="tech">
              <p>HTML5</p>
              <p>CSS3</p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/GRodrigues10/Projeto-Android"
                target="_blank"
              >
                <button>Github</button>
              </a>
              <a
                href="https://grodrigues10.github.io/Projeto-Android/"
                target="_blank"
              >
                <button>Deploy</button>
              </a>
            </div>
          </div>

          <div className="card">
            <h3>Confeitaria Online</h3>
            <img src={cake} alt="Capa do Conversor de Arquivos" />

            <p>
              Site desenvolvido em Bootstrap 5, moderno e responsivo,
              apresentando doces e produtos com foco em uma experiência
              intuitiva e agradável.
            </p>
            <div className="tech">
              <p>HTML5</p>
              <p>Bootstrap 5</p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/GRodrigues10/Projeto-Bootstrap"
                target="_blank"
              >
                <button>Github</button>
              </a>
              <a
                href="https://grodrigues10.github.io/Projeto-Bootstrap/"
                target="_blank"
              >
                <button>Deploy</button>
              </a>
            </div>
          </div>

          <div className="card">
            <h3>Projeto Cordel</h3>
            <img src={cordel} alt="Capa do Conversor de Arquivos" />

            <p>
              Página web criada como exercício do Curso em Vídeo, com layout
              responsivo e efeito parallax, destacando versos e tipografia
              temática.
            </p>
            <div className="tech">
              <p>HTML5</p>
              <p>CSS3</p>
            </div>
            <div className="btns">
              <a
                href="https://github.com/GRodrigues10/Projeto-Cordel"
                target="_blank"
              >
                <button>Github</button>
              </a>
              <a
                href="https://grodrigues10.github.io/Projeto-Cordel/"
                target="_blank"
              >
                <button>Deploy</button>
              </a>
            </div>
          </div>
        </div>
        <button onClick={back}>Voltar</button>
      </div>
    </StylesDetails>
  );
}

export default Details;
