import { useState } from "react";
import BotaoPubli from "./BotaoPubli";

function ContainerDigitar({ setComentario, atribuiValor }) {
  const [alturaDiv1, setAltura] = useState(["200px"]);
  const [alturaDiv2, setAltura2] = useState(["130px"]);
  const [alturaTextAltura, setTextAltura] = useState([]);

  const submitForm = () => {
    setComentario();
    document.getElementById("textoEscrita").value = "";
    document.getElementById("textoTitulo").value = "";
  };

  function aumentarCampo() {
    var objTextArea = document.getElementById("textoEscrita");
    var divDigitar = document.getElementById("divEscrita");
    var divDigitar2 = document.getElementById("divEscrita2");

    // Reseta a altura para recalcular corretamente
    objTextArea.style.height = "auto";
    // Ajusta a altura para o conteúdo
    objTextArea.style.height = objTextArea.scrollHeight + "px";

    // Ajusta a altura das divs com base na altura do textarea
    divDigitar.style.height = objTextArea.scrollHeight + 136 + "px";
    divDigitar2.style.height = objTextArea.scrollHeight + 66 + "px";
  }

  return (
    <div
      className="divAdicionar"
      id="divEscrita"
      style={{ height: alturaDiv1 }}
    >
      <div
        className="divAdicionar2"
        id="divEscrita2"
        style={{ height: alturaDiv2 }}
      >
        <textarea
          name=""
          id="textoTitulo"
          
          rows="2"
          className="campoTexto"
          placeholder="Titulo"
          onChange={atribuiValor}
        ></textarea>

        <textarea
          name=""
          id="textoEscrita"
          
          rows="4"
          className="campoTexto2"
          placeholder="Adicionar texto..."
          onInput={aumentarCampo}
          onChange={atribuiValor}
        ></textarea>

        <BotaoPubli submitForm={submitForm} />
      </div>
    </div>
  );
}
export default ContainerDigitar;
