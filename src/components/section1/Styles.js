import styled from "styled-components";
import back from '../../assets/backk2.png'

export const StylesSection1 = styled.div`
  min-height: 100vh;
padding-top: 100px; /* mesma altura do header */
/* display: flex;
align-items: center;
justify-content: center; */
height: auto;
  width: 100%;
 overflow-x: hidden;
  background-color: #0d0d0d;
  /* background-color: black; */
  background-image: url(${back});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
 




  .content-section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column-reverse;
    color: #ebebeb;
  }

  .social-medias {
    display: flex;
    gap: 15px;
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
  }


  

  /* Ícones sociais com animação suave de entrada em cascata */
  .social-medias svg {
    font-size: 35px;
    color: #d1c4e9;
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    transform: translateX(-150vw); /* começa fora da tela */
    animation: slideRight 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    transition: 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      background-color: #6e00ff;
      color: white;
      border-color: #ff00ff;
      box-shadow: 0 0 10px #6e00ff, 0 0 20px #ff00ff, 0 0 30px #6e00ff;
      transform: scale(1.1);
    }
  }

  /* Delays para entrada em cascata dos 3 ícones */
  .social-medias  a:nth-child(1) svg{ animation-delay: 0s; }
  .social-medias  a:nth-child(2) svg{ animation-delay: 0.2s; }
  .social-medias  a:nth-child(3) svg{ animation-delay: 0.4s; }

.perfil {
  transform: translateX(100%);
  animation: slideLeft 1.2s forwards;
}

.perfil img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 50px;
  animation: float 3s ease-in-out infinite, glow 3s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 15px #6e00ff, 0 0 20px #6e00ff, 0 0 25px #6e00ff;
  }
  50% {
    box-shadow: 0 0 25px #6e00ff, 0 0 35px #ff00ff, 0 0 45px #6e00ff; /* brilho maior */
  }
}

  .content-text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    text-align: center;
  }

h1 {
  font-size: 2rem;
  margin-top: 10px;
  color: #ebebeb;
  text-shadow: none; /* mantém conforme o original */
  opacity: 0; /* começa invisível */
  animation: fadeIn 2s ease forwards; /* fade-in apenas */
}

h2 {
  font-size: 1.6rem;
  margin-top: 5px;
  color: #6e00ff;
  text-shadow: 0 0 2px #6e00ff, 0 0 20px #6e00ff;
  opacity: 0;
  animation: fadeIn 2s ease 0.5s forwards; /* delay para h2 */
}

/* Keyframes fade-in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
p {
  margin-top: 20px;
  color: #d1c4e9;
  max-width: 600px;
  line-height: 1.5;
  text-align: justify;
  width: 90%;
  /* /* display: inline-block;   */
}

p {
  display: inline-block;
  transform: scale(0); /* começa invisível */
  animation: scaleUp 1s forwards;
}

/* Keyframes para crescer */
@keyframes scaleUp {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

  /* Cores para cada tecnologia */
  .tech {
    font-weight: bold;
  }
  .tech.react { color: #61dafb; }
  .tech.js { color: #f7df1e; }
  .tech.html { color: #e34f26; }
  .tech.css { color: #2965f1; }
  .tech.node{color: #339933}

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .btn button {
    margin-top: 30px;
    padding: 12px 30px;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background: linear-gradient(90deg, #6e00ff, #ff00ff);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: 0.4s ease;
    box-shadow: 0 0 10px #6e00ff, 0 0 20px #ff00ff;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    transform: scale(0); /* começa invisível */
  animation: scaleUp 1s forwards;
  }

  .btn button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #6e00ff, 0 0 40px #ff00ff, 0 0 60px #6e00ff;
  }

  @media screen and (min-width: 530px) {
    h1 { font-size: 2.1rem; }
    h2 { font-size: 1.7rem; }
    p { font-size: 1.1rem; }
    .btn button { font-size: 1.1rem; }
  }

  @media screen and (min-width: 768px) {
    padding-top:0;
    height: 100vh;
      background-attachment: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      
    /* height: 100vh; */
    .content-section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 20px 50px;
      height: 80%;
      gap: 50px;
    }
    .social-medias {
      flex-direction: column;
      justify-content: center;
      gap: 30px;
      margin: 0;
    }
    .content-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      padding: 0 20px;
      text-align: start;
      width: 100%;
    }
    .perfil { flex-shrink: 0; margin-left: 20px; }
    h1 { 
      font-size: 2.1rem;
      width: 90%;
     }
    h2 { 
      font-size: 1.6rem;
      width: 90%;
      

    }
   
    p { font-size: 1.2rem; }
    .btn button { font-size: 1.1rem; }
    .perfil img{
  margin-top: 0px;
  width: 200px;
  height: 200px;

    }
  }




  @media screen and (min-width: 992px) {
    .content-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 10px;
      padding: 0 20px;
      max-width: 600px;
      text-align: start;
    }
    .content-text h1,
    .content-text h2,
    .content-text p {
      margin: 0;
      width: 100%;
    }
    .content-text h1 { font-size: 2.5rem }
    h2 { font-size: 1.9rem }
    p { line-height: 1.5; }
    .btn { 
      width: 90%; 
    
  }
  .btn button{
    font-size: 1.2rem;
  }
    .perfil img { margin-top: 0px;
      width: 250px;
      height: 250px;
    }
  }

  @media screen and (min-width: 1200px) {
    .perfil img {
      width: 315px;
      height: 315px;
      object-fit: cover;
      border-radius: 50%;
     animation: float 3s ease-in-out infinite, glow 3s ease-in-out infinite;
    }
    .content-section { justify-content: space-between; }
    .content-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 10px;
      padding: 0 20px;
      max-width: 700px;
    }
    .content-text h1,
    .content-text h2,
    .content-text p { margin: 0; width: 100%; }
    h1 { font-size: 3.5rem !important; }
    h2 { font-size: 2rem; }
    p { line-height: 1.6; }
    .btn { width: 90%; }
    .social-medias svg { font-size: 40px; }
  }

  /* Animações */
  @keyframes slideRight {
    to { transform: translateX(0); }
  }

   @keyframes slideLeft {
    to { transform: translateX(0); }
  }
`;
