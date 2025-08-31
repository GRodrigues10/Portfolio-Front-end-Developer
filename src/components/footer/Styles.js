import styled from "styled-components";

export const StylesFooter = styled.footer`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #00000075;

  p {
    font-size: 0.8rem;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    transition: 0.4s ease;
    color: #8800f7ff;
    &:hover {
    color: #610ea5ff;
     
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
