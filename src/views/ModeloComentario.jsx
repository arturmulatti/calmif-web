import { useRef, useState, useEffect } from "react";
import PostagemComentario from "../componentes/ComponentesComentario/PostagemComentario";
import ContainerComentario from "../componentes/ComponentesComentario/ContainerComentario";
import axios from "axios";
import React from "react";

export default function ModeloComentario(props) {
    const [comentarioAberto, setComentarioAberto] = useState(true);
    const [atualizar, setAtualizar] = useState([]);
    const detailsRef = useRef(null);
    const [conteudo, setConteudo] = useState("");
    const [comentarios, setComentarios] = useState([]);

    const http = axios.create({
        baseURL: "http://localhost:8000",
        headers: {
            "content-type": "application/json",
        },
    });

    const fetchComments = async (postId) => {
        try {
            const response = await http.get(`/posts/${postId}/comments`);
            setComentarios(response.data);
        } catch (error) {
            console.error("Erro ao buscar os comentários:", error);
        }
    };

    useEffect(() => {
        fetchComments(props.id); // Certifique-se de passar o ID da postagem
    }, [atualizar]);

    const submitForm = () => {
        const container = document.getElementById("containerDigitar");
        const textoComentario = document.getElementById("textoComentario").value;
        setConteudo(textoComentario);

        // Chama a requisição HTTP após garantir que o estado foi atualizado
        http.post("/api/postComentario", { conteudo: textoComentario, post_id: props.id })
            .then(res => {
                console.log(res);
                setAtualizar(!atualizar); // Atualiza os comentários após adicionar um novo
            })
            .catch(err => console.error(err));

        if (container) {
            container.remove();
        }
    };

    function mostrarComentarios() {
        setComentarioAberto(!comentarioAberto);
    }

    function abrirComentario() {
        setComentarioAberto(true);
    }

    return (
        <>
            <React.StrictMode>
                <PostagemComentario
                    abrirComentario={() => {
                        mostrarComentarios();
                        if (detailsRef.current) {
                            detailsRef.current.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    titulo={props.titulo}
                    texto={props.conteudo}
                    submitForm={submitForm}
                    abrirComentar={abrirComentario}
                />
                <ContainerComentario
                    abrirComentario={comentarioAberto}
                    detailsRef={detailsRef}
                    comentarios={comentarios}
                    responderComentario={submitForm}
                    submitForm={submitForm} // Passa os comentários como props
                />
            </React.StrictMode>
        </>
    );
}
