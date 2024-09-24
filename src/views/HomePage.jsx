import React from "react";
import NavBar from "../componentes/ComponentesHomePage/NavBar.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import ContainerDigitar from "../componentes/ComponentesHomePage/ContainerDigitar.jsx";
import Postagem from "../componentes/ComponentesHomePage/Postagem.jsx";
import ReactDOM from "react-dom/client";

function HomePage() {
  var [posts, setPosts] = useState([]);
  const [atualizarPosts, setAtualizar] = useState([false]);
  const [titulo, setTitulo] = useState([]);
  const [texto, setTexto] = useState([]);

  const http = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
      "content-type": "application/json",
    },
  });
  const selectPost = async (textoDigitado) => {
    try {
      const response = await http.get(`/posts/${textoDigitado}/pesquisaPost`);
      setPosts(response.data); // Ajuste de acordo com o que será retornado da busca
    } catch (error) {
      console.error("Erro ao buscar os posts:", error);
    }
  };

  // Exemplo de função associada ao clique no botão de busca:
  function pesquisar() {
    const textoDigitado = document.getElementById("barraDePesquisa").value;
    selectPost(textoDigitado);
    console.log("teste");
  }

  const submitForm = () => {
    http
      .post("api/create", { titulo: titulo, conteudo: texto })
      .then((res) => console.log(res));
    var x = document.getElementById("botaoConfirma");
    var y = document.getElementById("botaoCancela");
    var textArea = document.getElementById("textoEscrita");
    var divtextArea1 = document.getElementById("divEscrita");
    var divtextArea2 = document.getElementById("divEscrita2");
    y.style.visibility = "hidden";
    x.style.visibility = "hidden";
    textArea.style.height = "auto";
    divtextArea1.style.height = "200px";
    divtextArea2.style.height = "130px";

    setAtualizar(true);
  };

  function atribuiValor() {
    var textoTitulo = document.getElementById("textoTitulo");
    var textoEscrita = document.getElementById("textoEscrita");
    setTitulo(textoTitulo.value);
    setTexto(textoEscrita.value);
  }
  function buscarComentarios() {}

  useEffect(() => {
    axios.get("http://localhost:8000").then(function (res) {
      console.log(res.data);
      setPosts(Array.from(res.data));
      setAtualizar(false);
    });
  }, [atualizarPosts]);

  return (
    <div>
      <React.StrictMode>
        <NavBar pesquisar={pesquisar} />

        <ContainerDigitar
          setComentario={submitForm}
          atribuiValor={atribuiValor}
        />

        {posts.map(function (val) {
          return (
            <Postagem
              key={val.id}
              id={val.id}
              titulo={val.titulo}
              texto={val.conteudo}
              idConetudo={val.id}
            />
          );
        })}
      </React.StrictMode>
    </div>
  );
}
export default HomePage;
