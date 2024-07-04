import { useState } from "react";
import BotaoPubli from "./BotaoPubli";

function ContainerDigitar(){
    const [titulo,setTitulo] = useState([])
    const [texto,setTexto] = useState([])
   const [alturaDiv1,setAltura] = useState(["200px"])
   const [alturaDiv2,setAltura2] = useState(["130px"])
   const [alturaTextAltura,setTextAltura] = useState([])
  function aumentarCampo(){
    
    
        var objTextArea = document.getElementById('textoEscrita');
        var  divDigitar = document.getElementById("divEscrita")
        var divDigitar2 = document.getElementById("divEscrita2")
        while (objTextArea.scrollHeight > objTextArea.offsetHeight)
        {
           objTextArea.rows += 1;
           setAltura((parseInt(objTextArea.scrollHeight)+136) + 'px');
           
           setAltura2( (parseInt(objTextArea.scrollHeight)+66) + 'px');
        }
        
   setTextAltura(objTextArea.rows)
  }
  function atribuiValor(){
    var textoTitulo = document.getElementById("textoTitulo")
    var textoEscrita = document.getElementById("textoEscrita")
    setTitulo(textoTitulo.value)
    setTexto(textoEscrita.value)
  }


    return(
        

<div className="divAdicionar"  id = "divEscrita" style={{height:alturaDiv1}}>
       <div className='divAdicionar2' id="divEscrita2" style={{height:alturaDiv2}}>
       
        <textarea name="" id="textoTitulo" cols="213" rows="2" className='campoTexto' placeholder='Titulo' onChange={atribuiValor}></textarea>
        
        <textarea name="" id="textoEscrita" cols="213" rows="4" className='campoTexto2' placeholder='Adicionar texto...' onInput={aumentarCampo} onChange={atribuiValor}></textarea>
       
        <BotaoPubli titulo = {titulo} texto = {texto} alturaDiv1 = {alturaDiv1} alturaDiv2 = {alturaDiv2} alturaTextArea = {alturaTextAltura}/> 
       </div>
       
</div>

    )
}
export default ContainerDigitar