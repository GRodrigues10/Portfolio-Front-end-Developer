import { StylesDetails } from "./Styles";
import produtime from "../../../assets/produ.png";
import netflix from "../../../assets/projeto-netflix.jpg";
import astro from "../../../assets/astro3.png";
import file from "../../../assets/file2.png";
import starwars from "../../../assets/lightsaber.png";
import backend from "../../../assets/backend.png";
import { useNavigate } from "react-router-dom";

function Details() {
     const navigate = useNavigate();
  const back = () => {
 
    navigate('/');
  

  }
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
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>

          <div className="card">
            <h3>Netflix-Clone</h3>
            <img src={netflix} alt="Capa da Netfix" />

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
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>

          <div className="card">
            <h3>API Star Wars</h3>
            <img src={starwars} alt="Capa do Star Wars" />

            <p>
              App web de Star Wars com full stack, exibindo filmes e séries,
              mostrando detalhes de cada título em interface moderna e
              responsiva.
            </p>
            <div className="tech">
              <p>React JS</p>
              <p>Styled Components</p>
              <p>React Router</p>
              <p>MongoDB</p>
              <p>node JS</p>
              <p>Endpoints RESTful</p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Deploy</button>
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
              <button>Github</button>
              <button>Deploy</button>
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
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>
          <div className="card">
            <h3>Conversor de Arquivos</h3>
            <img src={file} alt="Capa do Conversor de Arquivos" />

            <p>
              App web que permite arrastar ou selecionar arquivos e convertê-los
              em TXT, CSV, JSON, PNG ou JPG, com interface simples e rápida,
              direto no navegador.
            </p>
            <div className="tech">
              <p>React JS</p>
              <p>Styled Components</p>
              <p>React Router</p>
              <p>File-Saver</p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>

          <div className="card">
            <h3>Buscador de CEP</h3>
            <img src={file} alt="Capa do Conversor de Arquivos" />

            <p>
              App web que permite arrastar ou selecionar arquivos e convertê-los
              em TXT, CSV, JSON, PNG ou JPG, com interface simples e rápida,
              direto no navegador.
            </p>
            <div className="tech">
              <p>React JS</p>
              <p>Styled Components</p>
              <p>React Router</p>
              <p>File-Saver</p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>

          <div className="card">
            <h3>Catify</h3>
            <img src={file} alt="Capa do Conversor de Arquivos" />

            <p>
              App web que permite arrastar ou selecionar arquivos e convertê-los
              em TXT, CSV, JSON, PNG ou JPG, com interface simples e rápida,
              direto no navegador.
            </p>
            <div className="tech">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
              <p>API RESTful</p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>

          <div className="card">
            <h3>Buscador Climático</h3>
            <img src={file} alt="Capa do Conversor de Arquivos" />

            <p>
              App web que permite arrastar ou selecionar arquivos e convertê-los
              em TXT, CSV, JSON, PNG ou JPG, com interface simples e rápida,
              direto no navegador.
            </p>
            <div className="tech">
              <p>React JS</p>
              <p>API RESTful</p>
              <p>HTML5</p>
              <p>CSS3</p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>

             <div className="card">
            <h3>Projeto Tecnologia</h3>
            <img src={file} alt="Capa do Conversor de Arquivos" />

            <p>
              App web que permite arrastar ou selecionar arquivos e convertê-los
              em TXT, CSV, JSON, PNG ou JPG, com interface simples e rápida,
              direto no navegador.
            </p>
            <div className="tech">
              <p>HTML5</p>
              <p>CSS3</p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>

             <div className="card">
            <h3>Confeitaria Online</h3>
            <img src={file} alt="Capa do Conversor de Arquivos" />

            <p>
              App web que permite arrastar ou selecionar arquivos e convertê-los
              em TXT, CSV, JSON, PNG ou JPG, com interface simples e rápida,
              direto no navegador.
            </p>
            <div className="tech">
              <p>HTML5</p>
              <p>Bootstrap 5</p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>

          


             <div className="card">
            <h3>Projeto Cordel</h3>
            <img src={file} alt="Capa do Conversor de Arquivos" />

            <p>
              App web que permite arrastar ou selecionar arquivos e convertê-los
              em TXT, CSV, JSON, PNG ou JPG, com interface simples e rápida,
              direto no navegador.
            </p>
            <div className="tech">
              <p>HTML5</p>
              <p>CSS3</p>
            </div>
            <div className="btns">
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>


          
        </div>
        <button onClick={back}>Voltar</button>
      </div>
    </StylesDetails>
  );
}

export default Details;
