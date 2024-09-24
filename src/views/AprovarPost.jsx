import PostAprovar from "../componentes/ComponentesAprovarPostagem/PostAprovar";
import axios from "axios";
import { useState, useEffect } from "react";

export default function AprovarPost() {
  const [posts, setPosts] = useState([]); // Armazena os posts
  const [currentPostIndex, setCurrentPostIndex] = useState(0); // Índice do post atual
  const [loading, setLoading] = useState(true); // Estado de carregamento
  
  const http = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
      "content-type": "application/json",
    },
  });

  // Função para buscar dois posts do backend
  const buscarPosts = async () => {
    try {
      const response = await http.get(`/aprovar?limit=2`); // Assumindo que a API retorna 2 posts
      console.log("Novos posts recebidos:", response.data);
      setPosts(response.data); // Armazena os dois posts
      setCurrentPostIndex(0); // Reinicia o índice para o primeiro post
       // Desativa o estado de carregamento
    } catch (error) {
      console.error("Erro ao buscar os posts:", error);
      setLoading(false); // Desativa o estado de carregamento em caso de erro
    }
  };

  // Função para renderizar o próximo post ou buscar mais posts
  const renderizarProximoPost = async () => {
    if (currentPostIndex < posts.length - 1) {
      setCurrentPostIndex(currentPostIndex + 1); // Se houver mais posts no array, exibe o próximo
    } else {
      // Ativa o estado de carregamento
      setLoading(true); 
      await buscarPosts(); // Se não houver mais posts, busca mais dois
     
    }
  };

  // UseEffect para carregar os dois posts ao montar o componente
  useEffect(() => {
    buscarPosts(); // Busca os dois primeiros posts quando o componente é montado
  }, []);
  useEffect(() => {
    if (posts.length > 0) {
      setLoading(false); // Desativa o estado de carregamento quando 'posts' for atualizado
    }
  }, [posts]);
  if (loading) {
    return <p>Carregando posts...</p>; // Renderiza uma mensagem de carregamento
  }

  // Renderiza o componente `PostAprovar` com as props atualizadas
  return (
    <div>
      {posts.length > 0 && (
        <PostAprovar
          id={posts[currentPostIndex].id}
          titulo={posts[currentPostIndex].titulo}
          conteudo={posts[currentPostIndex].conteudo}
          renderizarPost={renderizarProximoPost}
        />
      )}
    </div>
  );
}
