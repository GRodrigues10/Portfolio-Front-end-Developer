import styled from "styled-components";
import background from "../../assets/bac.png";
import back from "../../assets/back.png";
// import b1 from '../../assets/astrolens.png'

export const StylesSection4 = styled.div`
  width: 100%;
  min-height: 100vh;
  color: #e6e6fa;
  display: flex;
  background-image: url(${back});
  background-position: center center;
  background-size: cover;
  align-items: center;
  justify-content: center;

  scroll-margin-top: 100px; 

  /* ==================== Content Section ==================== */
  .content-section {
    width: 100%;
    max-width: 1200px;
    text-align: center;
      padding: 30px;
  }

  .content-section h1 {
    margin-top: 0px;
    margin-bottom: 40px;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
  }

  h3 {
    color: white;
    text-shadow: 1px 2px 3px #00000086;
  }

  /* ==================== Grid ==================== */
  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }

  /* ==================== Card ==================== */
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
    background: rgba(0, 119, 255, 0.15);
    border: 1px solid rgba(0, 200, 255, 0.3);

 
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(80, 0, 120, 0.6),
      0 0 20px 5px rgba(80, 0, 120, 0.5);
      backdrop-filter: blur(1px); 
  }

  .card h3 {
    font-size: 1.4rem; /* menor em geral */
    margin-bottom: 10px;
  }

  .card p {
    font-size: 0.95rem; /* menor em geral */
    text-align: justify;
    margin-bottom: 15px;
    text-shadow: 1px 1px 2px #000;
   color: white;
    border-radius: 5px;
    background-color: #00000086;
    padding: 8px 5px;
    

   

  }

  /* ==================== Card Image ==================== */
  .card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* ==================== Tech Tags ==================== */
  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    margin-bottom: 5px;
  }

  .tech p {
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid;
    font-size: 0.7rem;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      background-color: #4da6ff;
      color: black;
    }
  }

  /* ==================== Buttons ==================== */
  .btns {
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  .btns button {
    padding: 10px 18px;
    border-radius: 8px;
    background: #500078;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.95rem;
    transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    border: 1px solid purple;
  }

  .btns button:hover {
    background: #31004a7a;
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(80, 0, 120, 0.6);
  }

  .see-more {
    margin-top: 50px;
    width: 100%;
  }

  .see-more button {
    padding: 10px;
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    background: rgba(0, 119, 255, 0.15);
    border: 1px solid rgba(0, 200, 255, 0.3);
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: 0.4s ease;
    max-width: 380px;

    &:hover {
      box-shadow: 0 8px 25px rgba(80, 0, 120, 0.6),
        0 0 20px 5px rgba(80, 0, 120, 0.5);
    }
  }

  /* ==================== Media Queries ==================== */
  @media screen and (min-width: 530px) {
   .cards{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
   .cards .card{
    max-width: 400px;

   }
    .card img {
      height: 180px;
    }
  }

  @media screen and (min-width: 768px) {
      background-image: url(${background});
  background-size: cover;
  background-position: center;
      background-attachment: fixed;
    .cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
        align-items: stretch;
  

    }
    .card img {
      height: 200px;
    }
    .card h3 {
      font-size: 1.35rem;
    }
    .card p {
      font-size: 0.9rem;
    }
    .tech p {
      font-size: 0.8rem;
    }
    .see-more button {
      font-size: 1.1rem;
    }

  }

  @media screen and (min-width: 992px) {

    .cards {
      grid-template-columns: repeat(3, 1fr);
    }

    .card img {
      height: 180px;
    }
    .card h3 {
      font-size: 1.2rem; /* menor */
    }
    .card p {
      font-size: 0.8rem !important; /* menor */
    }
    .tech p {
      font-size: 0.6rem !important;
    }
    .content-section h1 {
      font-size: 2.4rem;
    }
    .content-section p {
      font-size: 1.3rem;
    }
    .btns{
      margin-top: auto;
    }
    .btns button{
      font-size: 0.7rem;
      
    }
    .see-more button {
      font-size: 1.3rem ;
    }

  }

  @media screen and (min-width: 1200px) {


    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
    .card img {
      height: 180px;
    }
    .card h3 {
      font-size: 1.5rem; /* menor */
    }
    .card p {
      font-size: 1.04rem !important; /* menor */
    }
    .tech p {
      font-size: 0.75rem !important;
    }
    .content-section h1 {
      font-size: 3rem;
    }
    .content-section p {
      font-size: 1rem;
    }

       .btns button{
      font-size: 0.9rem;
    }
  }
`;
