import styled from "styled-components";

export const StylesHeader = styled.header`
  width: 100%;
  background: ${({ scrolled }) => (scrolled ? "rgba(48, 27, 97, 1)" : "transparent")} !important;
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(6px)" : "none")};
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
  display: flex;
  height: 100px;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;

  /* animação */
  z-index: 99999;

  transform: translateY(-100%); /* começa fora da tela */
  animation: slideDown 1s forwards; /* anima para baixo */

  h1 {
    font-size: 1.8rem;
    color: #ededed;
  }

  .menu-desktop {
    display: none;
  }

  .menu-hamburger {
    font-size: 1.3rem;
    font-weight: bold;
    color: #ededed;
  }

  @media screen and (min-width: 530px) {
    h1 {
      font-size: 2rem;
      color: #ededed;
      cursor: default;
    }

    .menu-desktop {
      display: none;
    }

    .menu-hamburger {
      font-size: 1.5rem;
      font-weight: bold;
      color: #ededed;
      cursor: pointer;
      transition: 0.4s ease;

      &:hover {
        color: #8b5cf6;
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding-inline: 0px;
    justify-content: space-around;
    h1 {
      font-size: 1.8rem;
      color: #ededed;
    }

    .menu-desktop {
      display: flex;
      gap: 20px;
    }

    .menu-desktop a {
      color: #b3b3b3;
      text-decoration: none;
      font-size: 1rem;
      transition: 0.4s ease;

      &:hover {
        color: #8b5cf6;
      }
    }

    .menu-hamburger {
      display: none;
    }
  }

  @media screen and (min-width: 1200px) {
    padding-inline: 0px;
    justify-content: space-around;
    h1 {
      font-size: 2.2rem;
      color: #ededed;
    }

    .menu-desktop {
      display: flex;
      gap: 20px;
    }

    .menu-desktop a {
      color: #ededed;
      text-decoration: none;
      font-size: 1.3rem;
    }

    .menu-hamburger {
      display: none;
    }
  }

  @keyframes slideDown {
    to {
      transform: translateY(0);
    }
  }
`;
