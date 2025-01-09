import { RiAddCircleLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { useState, useLayoutEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import ContainerDigitarComentario from "./ContainerDigitarComentario";

function PostagemComentario(props) {
  const detailsRef = useRef(null);
  const [containerComentar, setContainerComentar] = useState(false);

  useLayoutEffect(() => {
    if (containerComentar && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [containerComentar]);

  function criarDigitarComentario() {
    // Se o container já foi renderizado, apenas faz o scroll de volta
    if (containerComentar) {
      if (detailsRef.current) {
        detailsRef.current.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // Caso contrário, cria um novo container
    props.abrirComentar();
    const rootComentario = document.getElementById("rootComentario");
    const rootDiv = document.createElement("div");
    rootComentario.appendChild(rootDiv);

    // Renderiza o componente ContainerDigitarComentario na nova div
    ReactDOM.createRoot(rootDiv).render(
      <div ref={detailsRef}>
        {" "}
        {/* Ref para permitir o scroll automático */}
        <ContainerDigitarComentario
          submitForm={() => {
            props.submitForm();
            setContainerComentar(false); // Libera para renderizar um novo container após o envio
          }}
          responderComentario={criarDigitarComentario}
        />
      </div>
    );

    // Ativa o efeito de scroll após renderizar o componente
    setContainerComentar(true);
  }

  return (
    <div className="divPost">
      <div className="divAdicionar" style={{ height: props.alturaDiv1 }}>
        <div className="divAdicionar2" style={{ height: props.alturaDiv2 }}>
          <textarea
            cols="213"
            rows="2"
            className="campoTexto"
            value={props.titulo}
            readOnly
          ></textarea>
          <textarea
            cols="200"
            rows={props.alturaTextArea}
            className="campoTexto2"
            value={props.texto}
            readOnly
          ></textarea>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <button
              className="botaoComentario"
              style={{ marginLeft: "1260px", width: "200px" }}
              onClick={criarDigitarComentario}
            >
              <RiAddCircleLine className="iconeComentario" fill="slateblue"/>
              <p>Comentar</p>
            </button>
            <button className="botaoComentario" onClick={props.abrirComentario}>
              <FaRegComment className="iconeComentario" fill="slateblue" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostagemComentario;
