import styled from "styled-components";
import background from '../../../assets/bac.png'
import back from "../../../assets/back.png";

export const StylesDetails = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: #e6e6fa;
  padding: 30px;
  padding-top: 60px;
  box-sizing: border-box;
    /* background-image: url(${back}); */
    background-color: #0A001A ; 

  background-position: center center;
  /* background-attachment: scroll; */
  background-repeat: no-repeat;
  background-size: cover;


  .content-section {
    width: 100%;
    max-width: 1200px;
    text-align: center;
  }

  h1 {
    text-align: center;
    margin-bottom: 50px;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
     justify-items: center; /* centraliza os cards horizontalmente */
  align-items: start; /* evita esticamento vertical */
  }

  /* ==================== Card ==================== */
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
     
  max-width: 400px; /* limita largura igual ao Section4 */
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
    background: rgba(0, 119, 255, 0.15);
    border: 1px solid rgba(0, 200, 255, 0.3);
    height: 100%; /* ocupa toda altura do grid */
    color: white;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(80, 0, 120, 0.6),
      0 0 20px 5px rgba(80, 0, 120, 0.5);
     

  }

  .card h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  .card p {
    font-size: 0.95rem;
    text-align: justify;
    margin-bottom: 15px;
    text-shadow: 1px 1px 1px black;
    background-color: #00000086;
    padding: 10px;
    border-radius: 10px;
   color: white;

   
   
  }

  .card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    margin-bottom: 5px;
    
  }

  .tech p {
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid #ADD8E6;
    font-size: 0.7rem;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s ease;



    &:hover {
      background-color: #4da6ff;
      color: black;
      border: 1px solid black;
    }
  }

  .btns {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: auto;
    
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
    margin-top: 10px;
    margin-bottom: 10px;

    
  }

  .btns button:hover {
    background: #31004a7a;
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(80, 0, 120, 0.6);
    color: white;
  }

  button{
    padding: 10px;
    font-size: 1rem;
    margin-top: 50px;
    margin-bottom: 20px;
    background:transparent;
    color: white;
    border-radius: 5px;
    border: 1px solid;
    max-width: 400px;
    width: 100%;
    cursor: pointer;
    transition: .4s ease;

    &:hover{
      background-color: #4da6ff;
      color: black;
    }
  }

  /* ==================== Media Queries ==================== */
  @media screen and (min-width: 530px) {
    .cards {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .cards .card {
      max-width: 400px;
    }
    .card img {
      height: 180px;
    }
    button{
      font-size: 1.1rem;
    }
  }

  @media screen and (min-width: 768px) {
      background-image: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

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
    button{
      font-size: 1.2rem;
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
      font-size: 1.2rem;
    }
    .card p {
      font-size: 0.8rem !important;
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
    .btns button {
      font-size: 0.7rem;
    }
    button{
      font-size: 1.3rem;
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
      font-size: 1.5rem;
    }
    .card p {
      font-size: 1rem !important;
    }
    .tech p {
      font-size: 0.85rem !important;
    }
    .content-section h1 {
      font-size: 3rem;
    }
    .content-section p {
      font-size: 1rem;
    }
    .btns button {
      font-size: 0.9rem;
    }
  }
`;
