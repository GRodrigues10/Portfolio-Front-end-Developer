import React from "react";
import { StylesSection5 } from "./Styles";
import emailjs from "@emailjs/browser";

function Section5() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_256rbgi",     
        "template_c657ein",    
        e.target,
        "YUwRXf0TSw3I7_wyr"    
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          alert("Erro ao enviar: " + error.text);
        }
      );

    e.target.reset();
  };

  return (
    <StylesSection5 id="contato">
      <div className="content-section">
        <h1>Contato</h1>

        <form className="inputs" onSubmit={sendEmail}>
          <div className="names">
            <input type="text" name="nome" placeholder="Nome" required />
            <input type="text" name="sobrenome" placeholder="Sobrenome" required />
          </div>

          <div className="emails">
            <input type="text" name="email" placeholder="E-mail" required />
            <input type="text" name="assunto" placeholder="Assunto" required />
          </div>

          <textarea name="mensagem" placeholder="Digite o Assunto..." required></textarea>

          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </StylesSection5>
  );
}

export default Section5;
