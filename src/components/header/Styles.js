import styled from "styled-components";

/* Header original (sem alterações) */
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
  

  z-index: 99999;
  transform: translateY(-100%);
  animation: slideDown 1s forwards;

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
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      color: #8b5cf6;
    }
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
      color: #ededed;;
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

/* Sidebar lateral */
export const StylesSidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-300px")};
  width: 250px;
  height: 100%;
  background: rgba(48, 27, 97, 1);
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  padding: 80px 20px;
  gap: 20px;
  transition: right 0.3s ease;
  z-index: 100000;

  a {
    color: #ededed;
    text-decoration: none;
    font-size: 1.2rem;
    transition: 0.3s ease;

    &:hover {
      color: #8b5cf6;
    }
  }

  @media screen and (min-width: 531px) {
    display: none;
  }
`;

/* Overlay atrás do menu */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  opacity: ${({ open }) => (open ? "1" : "0")};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  transition: opacity 0.3s ease;
  z-index: 99999;

  @media screen and (min-width: 531px) {
    display: none;
  }
`;

/* Botão fechar (X) visível acima da aba */
export const CloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  color: #ededed;
  cursor: pointer;
  z-index: 100002;

  &:hover {
    color: #8b5cf6;
  }
`;
