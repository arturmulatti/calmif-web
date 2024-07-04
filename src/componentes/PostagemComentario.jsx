import { RiAddCircleLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { useState } from "react";
import ReactDOM from 'react-dom/client'
import ContainerDigitarComentario from "./ContainerDigitarComentario";
import { useRef } from "react";
import { useEffect } from "react";

function postagemComentario(props){

 


var idConteudo = "conteudo"+ props.idConteudo
var idTitulo = "titulo" + props.idConteudo
const detailsRef = useRef(null);
const [referencia,setReferencia] = useState([])   
useEffect(() => {
  if (detailsRef.current) {
    detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    setReferencia(false)
  }
}, [referencia]);

function criarDigitarComentario(){
  ReactDOM.createRoot(document.getElementById("rootPostagem")).render(
    <>
<ContainerDigitarComentario  />
<div id="teste"ref={detailsRef}> </div>

</>
     
    )
    setReferencia(true)
   

}
    return(
      
      <div className="divPost" >
    <div className="divAdicionar" style={{height:props.alturaDiv1}}>
     <div className='divAdicionar2'style={{height:props.alturaDiv2}}>
       <div className=""></div>
       <textarea   cols="213" rows="2" className='campoTexto'  value={props.titulo} readOnly ></textarea>
       <textarea    cols="200" rows={props.alturaTextArea} className='campoTexto2'  value={props.texto}  readOnly   ></textarea>
      
      </div>
      <div >
        <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
        
        <button className="botaoComentario" style={{marginLeft:"1260px", width:"200px"}} onClick={criarDigitarComentario}>
            
      <RiAddCircleLine className="iconeComentario" />
      <p>Comentar</p>
      
      </button>
      
        <button className="botaoComentario" onClick={props.abrirComentario}>
      <FaRegComment className="iconeComentario"  />   

      </button>
    
        </div>
      </div>
    </div>   

    </div>
    
    )
}
export default postagemComentario