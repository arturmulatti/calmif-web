import { FaRegComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function Postagem(props) {
  const navigate = useNavigate();
  const postRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
 const [alturaDiv1,setAlturaDiv1] = useState("200px")
 const [alturaDiv2,setAlturaDiv2] = useState("130px")
  const http = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
      "content-type": "application/json",
    },
  });

  const renderizarComentários = async () => {
    var id = "/Postagem"+props.idConetudo
    navigate(id);
  };

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    }
    if (textRef.current) {
      textRef.current.style.height = `${textRef.current.scrollHeight}px`;
      setAlturaDiv1((parseInt(textRef.current.scrollHeight)+136) + 'px');
           
      setAlturaDiv2( (parseInt(textRef.current.scrollHeight)+66) + 'px');
    }
  
  }, [props.titulo, props.texto]);

  return (
    <div ref={postRef} className="divPost">
      <div className="divAdicionar" style={{ height: alturaDiv1 }}>
        <div className='col-md-3 divAdicionar2' style={{ height: alturaDiv2 }}>
          <div className=""></div>
          <textarea
            ref={titleRef}
            cols="213"
            rows="2"
            className='campoTexto'
            value={props.titulo}
            readOnly
            style={{ overflow: 'hidden' }}
          ></textarea>
          <textarea
            ref={textRef}
            cols="200"
            rows={props.alturaTextArea}
            className='campoTexto2'
            value={props.texto}
            readOnly
            style={{ overflow: 'hidden' }}
          ></textarea>
        </div>
        <div>
          <button
            className="botaoComentario"
            style={{ width: "140px", marginLeft: "1300px" }}
            onClick={renderizarComentários}
          >
            <FaRegComment className="iconeComentario" />
            <p>Comentários</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Postagem;
