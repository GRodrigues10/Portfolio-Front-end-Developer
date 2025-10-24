import styled from "styled-components";
import back from "../../assets/backgroundPortfolio_.png";

export const StylesSection2 = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0a001a;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-margin-top: 100px;

  .content-section {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      color: #e6e6fa;
      padding-top: 40px;
      span {
        color: #6e00ff;
      }
    }

    p {
      color: #cccce5;
      text-align: justify;
      margin: 30px 0;
      font-size: 1.1rem;
      max-width: 1160px;
      
      span {
        color: #d8ccff;
        font-weight: 600;
      }
    }
  }

  .boxs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px 0;
    color: #e6e6fa;
    max-width: 1200px;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      text-shadow: 0 0 6px rgba(110, 0, 255, 0.7);
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-inline: 20px;
    }

    li {
      font-size: 1.1rem;
      line-height: 1.5;
    }

    div {
      background: rgba(20, 18, 54, 0.6);
      backdrop-filter: blur(6px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 25px;
      border-radius: 15px;
      gap: 10px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      min-height: 250px;
    }

    div:hover {
      transform: translateY(-8px);
      box-shadow: 0 0 20px #6e00ff, 0 0 40px #6e00ff55;
      border: 1px solid #6e00ff55;
      cursor: context-menu;
    }
  }

  /* Media Query 768px */
  @media screen and (min-width: 768px) {
    background: url(${back}) top center/ cover no-repeat fixed;

    .content-section {
      h1 {
        font-size: 2.2rem;
      }
      p {
        font-size: 1.2rem;
      }
    }

    .boxs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;

      h3 {
        font-size: 1.7rem;
      }
      li {
        font-size: 1.15rem;
      }
    }
  }

  /* Media Query 992px */
  @media screen and (min-width: 992px) {
    .content-section {
      h1 {
        font-size: 2.4rem;
      }
      p {
        font-size: 1.3rem;
      }
    }
  }

  /* Media Query 1200px */
  @media screen and (min-width: 1200px) {
 
  .content-section {

    padding: 60px;
    width: 100%;
  }

  .content-section h1 {
    font-size: 3rem;
  }

  .content-section p {
    font-size: 1.4rem;
    /* max-width: 1200px; */
  }

  .boxs h3 {
    font-size: 2rem;
  }

  .boxs li {
    font-size: 1.4rem;
  }

  .boxs div{

    max-width: 570px;
  }
}

`;
