import { RiAddCircleLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { useState } from "react";
import ReactDOM from 'react-dom/client';
import ContainerDigitarComentario from "./ContainerDigitarComentario";
import { useRef, useEffect } from "react";

function PostagemComentario(props) {
    const detailsRef = useRef(null);
    const [referencia, setReferencia] = useState([]);

    useEffect(() => {
        if (detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: 'smooth' });
            setReferencia(false);
        }
    }, [referencia]);

   
    function criarDigitarComentario() {
        const rootComentario = document.getElementById("rootComentario");
        const rootDiv = document.createElement('div');
        rootComentario.appendChild(rootDiv); // Adiciona a nova div após o último comentário

        ReactDOM.createRoot(rootDiv).render(
            <div ref={detailsRef}> {/* Associa o ref ao novo comentário */}
                <ContainerDigitarComentario submitForm={props.submitForm} responderComentario={criarDigitarComentario}/>
            </div>
        );
        setReferencia(true); // Aciona o efeito de scroll
    }
    function responderComentario(){
        const rootComentario = document.getElementById("rootComentario");
        const rootDiv = document.createElement('div');
        rootComentario.appendChild(rootDiv); // Adiciona a nova div após o último comentário

        ReactDOM.createRoot(rootDiv).render(
            <div ref={detailsRef}> {/* Associa o ref ao novo comentário */}
                <ContainerDigitarComentario submitForm={props.submitForm} />
            </div>
        );
        setReferencia(true); // Aciona o efeito de scroll
    }
    return (
        <div className="divPost">
            <div className="divAdicionar" style={{ height: props.alturaDiv1 }}>
                <div className='divAdicionar2' style={{ height: props.alturaDiv2 }}>
                    <div ></div>
                    <textarea cols="213" rows="2" className='campoTexto' value={props.titulo} readOnly></textarea>
                    <textarea cols="200" rows={props.alturaTextArea} className='campoTexto2' value={props.texto} readOnly></textarea>
                </div>
                <div>
                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                        <button className="botaoComentario" style={{ marginLeft: "1260px", width: "200px" }} onClick={criarDigitarComentario}>
                            <RiAddCircleLine className="iconeComentario" />
                            <p>Comentar</p>
                        </button>
                        <button className="botaoComentario" onClick={props.abrirComentario}>
                            <FaRegComment className="iconeComentario" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostagemComentario;
