
import { FaRegComment } from "react-icons/fa";
import { Router, useNavigate,Routes,Route } from "react-router-dom";


import axios from "axios";


function postagem(props){
 
  const http = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
      "content-type": "application/json",
    },
  });
 
 
 
 

const  renderizarComentários = async ()=>{
  
  await http.post('requestComentario', { id_comentario:props.idConteudo });

      

  return navigate("/Comentario")
}

    return(
      
      <div className="divPost" >
       
    <div className="divAdicionar" style={{height:props.alturaDiv1}}>
     <div className='col-md-3 divAdicionar2'style={{height:props.alturaDiv2}}>
       <div className=""></div>
       <textarea   cols="213" rows="2" className='campoTexto'  value={props.titulo} readOnly ></textarea>
       <textarea   cols="200" rows={props.alturaTextArea} className='campoTexto2'  value={props.texto}  readOnly   ></textarea>
      
      </div>
      <div>
        <button className="botaoComentario" style={{width:"140px",marginLeft:"1300px"}} onClick={renderizarComentários}>
      <FaRegComment className="iconeComentario" />
      <p>Comentários</p>
      </button>
      </div>
    </div>   

    </div>
    
    )
}
export default postagem