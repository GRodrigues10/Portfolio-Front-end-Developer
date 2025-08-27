import styled from "styled-components";

export const StylesFooter = styled.footer`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  p {
    font-size: 1rem;
    text-decoration: none;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      color: rgba(138, 16, 238, 1);
    }
  }

  @media screen and (min-width: 530px) {
    p {
      font-size: 1.1rem;
    }
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
