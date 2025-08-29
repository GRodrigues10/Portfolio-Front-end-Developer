import React from "react";
import { StylesSection5 } from "./Styles";

function Section5() {
  return (
    <StylesSection5 id="contato">
      <div className="content-section">
        <h1>Contato</h1>
        {/* <div className="direct-contact">
          <div>
            <p>
              <strong>Telefone:</strong> (21) 96547-6339
            </p>
            <p>
              <strong>Instagram:</strong> @GRodriguess10
            </p>
          </div>

        </div> */}
        <div className="inputs">
          <div className="names">
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Sobrenome" />
          </div>

          <div className="emails">
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Assunto" />
          </div>
          <textarea placeholder="Digite o Assunto..."></textarea>

          <button>Enviar Mensagem</button>
        </div>
      </div>
    </StylesSection5>
  );
}

export default Section5;
