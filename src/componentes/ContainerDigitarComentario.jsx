
import styles from "./Comentario.module.css"
import { useState } from "react";
import axios from "axios";
import ReactDOM from 'react-dom/client'
import ComentarioPequeno from "./ComentarioPequeno";
export default function ContainerDigitarComentario(){
    const http = axios.create({
        baseURL: "http://localhost:8000/api/",
        headers: {
          "content-type": "application/json",
        },
      });
    const [altura,setAltura] = useState(["200px"])
    const [textoComentario,setTextoComentario] = useState([])
   function aumentarCampo(){
     
     
         var objTextArea = document.getElementById('textoComentario');
         
         while (objTextArea.scrollHeight > objTextArea.offsetHeight)
         {
            objTextArea.rows += 1;
            
            
           
         }
         setTextoComentario(objTextArea.value)
    
   }
   function adicionarComentario(){
    http.post('postComentario', {conteudo:textoComentario,id_user:"1",id_post:"1" })
    .then(res => console.log(res))
    .catch(err => console.error(err));
   
    
 var x = document.getElementById("contarinerDigitarComentario").remove()
    ReactDOM.createRoot(document.getElementById("rootComentario")).render(

        <ComentarioPequeno textoComentario = {textoComentario}/>
    
            
          
        )
   }
    return(
        <div id="contarinerDigitarComentario">
       <hr style={{margin:"20px",marginLeft:"35px",marginRight:"40px"}} />
        <textarea  className={styles.textAreaDiv} placeholder="Adicionar comentário...." id="textoComentario" onChange={aumentarCampo} rows= "2"></textarea>
        
        <div style={{display:"flex",alignItems:"center"}}> 
        <hr style={{marginLeft:"35px", width:"680px"}} />
        <button className="botaoAdd"style={{marginTop:"25px",marginLeft:"0",marginRight:"0"}} onClick={adicionarComentario}>Adicionar</button>
        <hr style={{marginRight:"40px",width:"680px"}} />
        </div>
        
        
        </div>
    )
}