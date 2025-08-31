import styled from "styled-components";
import contact from "../../assets/contact.png";
export const StylesSection5 = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-image: url(${contact}); */
  background-size: cover;
  background-position: center center;
  background-attachment: scroll;
  color: #e6e6fa;
  display: flex;
  align-items: center;
  justify-content: center;
  .content-section {
    margin-top: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .content-section .direct-contact {
    font-size: 1rem;
    display: flex;
    text-align: center;
    margin-bottom: 20px;
    flex-direction: column;
    gap: 10px;
    color: white;
    text-shadow: 1px 1px 1px black;
    div{
        display: flex;
        flex-direction: column;
        gap:10px;
    }
  }

  .content-section .inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  .content-section .names {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    gap: 10px;
  }

  .content-section .emails {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 700px;
  }
  .content-section h1 {
    margin-bottom: 30px;
  }

  .content-section input {
    background-color: #0000006e;
    border: none;
    padding: 10px;
    width: 100%;
    max-width: 600px;

    border-radius: 5px;
    font-size: 1rem;
    border: 1px solid lightblue;
    outline: none;
    color: white;
  }

  textarea {
    width: 100%;
    max-width: 700px;

    background-color: #0000006e;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
    height: 250px;
    border: 1px solid lightblue;
    outline: none;
    color: white;
    resize: none;
  }

  .content-section button {
    width: 100%;
    max-width: 300px;
    padding: 10px;
    background-color: #0000006e;
    color: lightblue;
    font-size: 1rem;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: 0.4s ease;
    &:hover {
      background-color: #aeaeffff;
      color: black;
    }
  }

  @media screen and (min-width: 530px) {
    .content-section h1 {
      font-size: 2.1rem;
    }

    .content-section input {
      font-size: 1.1rem;
    }

    textarea {
      font-size: 1.1rem;
    }

    .content-section button {
      font-size: 1.1rem;
    }

      .content-section .direct-contact {
    font-size: 1.1rem;
  }
  }

  @media screen and (min-width: 768px) {
      background-attachment: fixed;
     min-height: 100vh;
    .content-section h1 {
      font-size: 2.2rem;
    }

    .content-section input {
      font-size: 1.2rem;
    }

    textarea {
      font-size: 1.2rem;
    }

    .content-section button {
      font-size: 1.2rem;
    }

    .content-section .names {
      flex-direction: row;
    }

    .content-section .emails {
      flex-direction: row;
    }
      .content-section .direct-contact {
    font-size: 1.2rem;
    display: flex;
    text-align: center;
    margin-bottom: 20px;
    gap: 10px;
    color: white;
    width: 100%;
    max-width: 700px;
    text-shadow: 1px 1px 1px black;
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        gap:10px;
    }
  }
  }
  @media screen and (min-width: 1200px) {
    .content-section h1 {
      font-size: 3rem;
    }

    .content-section input {
      font-size: 1.3rem;
    }

    textarea {
      font-size: 1.3rem;
    }

    .content-section button {
      font-size: 1.3rem;
    }
        .content-section .direct-contact {
    font-size: 1.5rem;
  }
  }
`;
