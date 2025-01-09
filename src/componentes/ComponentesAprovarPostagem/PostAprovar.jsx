import { FcCheckmark } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";
import { Box, Grid } from "@mui/material";
import { FaChevronCircleRight } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import axios from "axios";
import { useState,useEffect,useRef } from "react";

export default function PostAprovar({ id, titulo, conteudo, renderizarPost }) {
  const http = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
      "content-type": "application/json",
    },
  });
 
  // Estado para controlar se a div está visível ou não
  
  const [visivel, setVisivel] = useState(true);
  const postRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const aprovar = async () => {
    var url = "/confirmarPost/" + id;

    try {
      var divPost = document.getElementById("divAprovacao");
      divPost.style.animationName = "slideOutLeft";
      // Oculta a div
      await http.patch(url, { aprovado: 1 });

      // Espera o término da animação (controlado pelo CSS)

      renderizarPost();

      divPost.addEventListener("animationend", () => {
        divPost.style.animationName = "deslizar2";
      });
    } catch (error) {
      console.error("Erro ao aprovar o post:", error);
    }
  };

  const reprovar = async () => {
    var url = "/confirmarPost/" + id;

    try {
      var divPost = document.getElementById("divAprovacao");
      divPost.style.animationName = "slideOutLeft";
      // Oculta a div
      await http.patch(url, { aprovado: 0 });

      // Espera o término da animação (controlado pelo CSS)

      renderizarPost();

      divPost.addEventListener("animationend", () => {
        divPost.style.animationName = "deslizar2";
      });
    } catch (error) {
      console.error("Erro ao aprovar o post:", error);
    }
  };

  return (
    <>
      {visivel && (
        <div
          style={{
            margin: "200px",
            animationName: visivel ? "deslizar2" : "slideOutLeft",
            animationDuration: "2s",
            overflow: "hidden",
          }}
          id="divAprovacao"
        >
          <div>
            <div
              className="divAdicionar"
              style={{ backgroundColor: "slateblue" }}
            >
              <div
                className="divAdicionar2"
                style={{ backgroundColor: "#111417" }}
              >
                <textarea
                  cols="151"
                  rows="2"
                  className="campoTexto"
                  value={titulo}
                  readOnly
                  ref={titleRef}
                ></textarea>
                <textarea
                  cols="151"
                  className="campoTexto2"
                  value={conteudo}
                  readOnly
                  
                  ref={textRef}
                ></textarea>
              </div>
              <div></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "620px",
                  marginLeft: "10px",
                  borderRadius: "20px",
                  marginTop: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                id="divAprovacao"
              >
                <button
                  className="botaoComentario"
                  style={{
                    width: "70px",
                    height: "70px",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <GiConfirmed
                    size={50}
                    style={{
                      visibility: "visible",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                    fill="green"
                    onClick={aprovar}
                  />
                </button>
                <button
                  className="botaoComentario"
                  style={{
                    width: "70px",
                    height: "70px",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                  onClick={reprovar}
                >
                  <MdOutlineCancel
                    size={50}
                    style={{
                      color: "white",
                      flexShrink: "0",
                      alignContent: "center",
                    }}
                    fill="red"
                  />
                </button>
              </div>
            </div>
          </div>
          <button
            className="botaoComentario"
            style={{
              width: "70px",
              height: "70px",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              left: "1400px",
              top: "300px",
            }}
          >
            <FaChevronCircleRight
              style={{ height: "50px", width: "50px" }}
              fill="slateblue"
            />
          </button>
        </div>
      )}
    </>
  );
}