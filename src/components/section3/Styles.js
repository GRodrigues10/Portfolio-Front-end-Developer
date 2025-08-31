// Styles.js
import styled from "styled-components";
import back from "../../assets/skills.png";
import backmobile from "../../assets/back_mobile.png";

export const StylesSection3 = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${backmobile});
  background-size: cover;
  background-position: center center;
  background-attachment: scroll;
  color: #dcdcdc; /* texto base */
  display: flex;
  align-items: center;
  justify-content:center;
   scroll-margin-top: 100px; 
  
  .content-section {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }

  .content-section h1 {
    margin-top: 30px;
    margin-bottom: 30px;
   color: #e6e6fa; /* agora branco */
    
  }

  .content-section .skills {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    font-size: 2.5rem;
    gap: 20px;
    margin-bottom: 20px;
  }

  .content-section .skills div {
    background: rgba(15, 15, 15, 0.7); /* dark translúcido */
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 20px;
    width: 100%;
    text-align: center;
    transition: 0.4s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: float 3s ease-in-out infinite;
    color: #dcdcdc;
  }

  .content-section .skills div:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.1); /* branco translúcido no hover */
    border: 1px solid #fff;
    box-shadow: 0 0 15px #fff, 0 0 30px rgba(255, 255, 255, 0.5);
    color: #fff;
    cursor: context-menu;
  }

  .content-section .skills div svg {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: white; /* ícones em cinza claro */
    transition: 0.4s ease;
  }

  .content-section .skills div:hover svg {
    color: #fff; /* ícone fica branco no hover */
  }

  .content-section .skills div span {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    transition: 0.4s ease;
  }

  .content-section .skills div:hover span {
    color: #fff;
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  @media screen and (min-width: 530px){
    .content-section .skills{
      grid-template-columns: repeat(2, 1fr);
    }
    .content-section{
    padding: 30px;

    }
   
  }

  @media screen and (min-width: 768px){
  background: url(${back});
 background-position:center center;
      background-attachment: fixed;


    .content-section .skills{
      grid-template-columns: repeat(3, 1fr);
    }
    .content-section .skills div {
      width: 200px;
      height: 150px;
    }

    .content-section .skills {
      font-size: 3rem;
    }
  }

    @media screen and (min-width: 992px){
      
    .content-section h1 {
      font-size: 2.4rem;
    }
    .content-section p {
      font-size: 1.3rem;
    }

    .content-section .skills div {
      width:280px;
      height: 200px;
    }

    .content-section .skills {
      font-size: 3rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section{
        padding: 60px
    }
    .content-section .skills {
      grid-template-columns: repeat(4, 1fr);
      font-size: 3.5rem;
    }

    .content-section .skills div {
      width: 270px;
      height: 225px;
    }

    h1 {
      font-size: 3rem !important;
      padding-bottom: 20px !important;
    }

    p {
      font-size: 1.4rem;
      color: #cfcfcf;
    }
  }
`;
