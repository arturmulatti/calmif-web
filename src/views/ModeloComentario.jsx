import { useRef } from "react"

import React, { useState } from "react"
import PostagemComentario from "../componentes/PostagemComentario"
import ContainerComentario from "../componentes/ContainerComentario"
import ContainerDigitarComentario from "../componentes/ContainerDigitarComentario"
export default function ModeloComentario(){
    const [comentarioAberto,setComentarioAberto] = useState(true)
    const detailsRef = useRef(null);
    
    
    function mostrarComentarios(){
        if(comentarioAberto == true){
          setComentarioAberto(false)
        }
        else{
          setComentarioAberto(true)
        }
      }
      console.log(comentarioAberto)
    return(
        <>
         <React.StrictMode>
  
  
         <PostagemComentario abrirComentario={() => {
          mostrarComentarios();
          scrollToDetails(); // Chame a função de scroll quando o botão for clicado
        }} />
        
   <ContainerComentario abrirComentario={comentarioAberto} detailsRef={detailsRef}/>

 
 
   </React.StrictMode>
        </>
    )
}