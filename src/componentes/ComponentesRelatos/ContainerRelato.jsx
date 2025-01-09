import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import RelatoPequeno from "./RelatoPequeno";
import { MdAddBox } from "react-icons/md";
import styles from "./relatos.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

export default function ContainerRelato(props) {
  const http = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
      "content-type": "application/json",
    },
  });

  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [exibirTextarea, setExibirTextarea] = useState(false);
  const [relatos, setRelatos] = useState([]);
  const sliderRef = useRef(null); // Referência para o carrossel

  const submitForm = () => {
    http
      .post("api/postRelato", { titulo: titulo, conteudo: texto })
      .then((res) => console.log(res));
    setExibirTextarea(false);
    setTitulo("");
    setTexto("");
  };

  const handleAdicionarClick = () => {
    setExibirTextarea(true);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/getRelatos").then(function (res) {
      setRelatos(res.data);
    });
  }, []);
  const PrevArrow = ({ onClick }) => (
    <button
      className="botaoComentario"
      style={{
        position: "absolute",

        left: "1px",
        top: "350px",

        width: "40px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "10px",
      }}
      onClick={() => sliderRef.current.slickPrev()}
    >
      <FaChevronCircleLeft
        fill="slateblue"
        style={{ width: "25px", height: "25px" }}
      />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="botaoComentario"
      style={{
        position: "absolute",
        left: "1480px",
        top: "350px",

        width: "40px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
        margin: "0px",
      }}
      onClick={() => sliderRef.current.slickNext()}
    >
      <FaChevronCircleRight
        fill="slateblue"
        style={{ width: "25px", height: "25px" }}
      />
    </button>
  );

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: false,
    prevArrow: null, // Desativando as setas do carrossel
    nextArrow: null, // Desativando as setas do carrossel
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Colocando os botões externos acima do carrossel
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginRight: "20px",
        marginLeft: "20px",
      }}
    >
      {/* Botões externos para controlar o carrossel */}
      
       
          <PrevArrow/>
        
      

      <div style={{ maxWidth: "1450px", height: "500px",marginLeft:"40px"}}>
        <Slider ref={sliderRef} {...sliderSettings} >
          {/* Container de digitação do relato */}
          <div style={{ padding: "0 10px" }}>
            <Card
              sx={{
                backgroundColor: "#111417",
                width: "420px",
                height: "450px",
                border: "1px solid slateblue",
                margin: "20px",
              }}
            >
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {exibirTextarea ? (
                    <div
                      className="divAdicionar2"
                      id="divEscrita2"
                      style={{ width: "100%", height: "330px" }}
                    >
                      <textarea
                        id="textoTitulo"
                        cols="52"
                        rows="2"
                        className="campoTexto"
                        placeholder="Título"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                      ></textarea>

                      <textarea
                        id="textoEscrita"
                        cols="52"
                        rows="16"
                        className="campoTexto2"
                        placeholder="Adicionar texto..."
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                      ></textarea>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <button
                          className="botaoAdd"
                          style={{ marginTop: "40px", width: "200px" }}
                          onClick={submitForm}
                        >
                          Adicionar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.divAdicionarRelato}>
                      <MdAddBox
                        fill="slateblue"
                        style={{ height: "200px", width: "200px" }}
                      />
                      <button
                        style={{
                          marginTop: "10px",
                          padding: "8px 16px",
                          backgroundColor: "slateblue",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={handleAdicionarClick}
                      >
                        Adicionar
                      </button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Relatos carregados do back-end */}
          {relatos.map((relato, index) => (
            <div key={index} style={{ padding: "0 10px" }}>
              <RelatoPequeno
                titulo={relato.titulo}
                conteudo={relato.conteudo}
              />
            </div>
          ))}
        </Slider>
      </div>
     
        <NextArrow />
      
    </div>
  );
}
