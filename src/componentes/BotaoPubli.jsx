import { FcCheckmark } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";
import Postagem from './Postagem';
import ReactDOM from 'react-dom/client'

import axios from "axios";

function BotaoPubli(props){

    const http = axios.create({
        baseURL: "http://localhost:8000/api/",
        headers:{
            "content-type":"application/json",
            
        }
    });
    
    const submitForm = ()=>{

     http.post('create',{titulo:props.titulo,conteudo:props.texto,id_user:2}).then(res=>
         console.log(res)
     )
     var x = document.getElementById("botaoConfirma")
     var y =document.getElementById('botaoCancela')
     y.style.visibility = "hidden"
     x.style.visibility = "hidden"
    

           
        ReactDOM.createRoot(document.getElementById("rootPostagem")).render(

        
        
  
<Postagem   texto = {props.texto} titulo = {props.titulo} altura = {x.style.height}
 alturaDiv2 = {props.alturaDiv2} 
 alturaDiv1 ={props.alturaDiv1}
 alturaTextArea = {props.alturaTextArea}
 />
    
  
)
let  divDigitar = document.getElementById("divEscrita")
let divDigitar2 = document.getElementById("divEscrita2")
let campoTextoConteudo =document.getElementById("textoEscrita");
let campoTitulo = document.getElementById("textoTitulo");
campoTextoConteudo.value = ""
campoTextoConteudo.rows = 4
campoTitulo.value = ""
divDigitar.style.height = "200px"
divDigitar2.style.height ="130px"

    }
   
    function criarBot(){

       var x = document.getElementById("botaoConfirma")
       var y =document.getElementById('botaoCancela')
       y.style.visibility = "visible"
       x.style.visibility = "visible"
       
        
       
       
    }
    function apagarBot(){

        var x = document.getElementById("botaoConfirma")
        var y =document.getElementById('botaoCancela')
        y.style.visibility = "hidden"
        x.style.visibility = "hidden"
    
     }

    return(
        
<>
<div className="divBotoes"> 

<button id="bota" className="botaoAdd" onClick={criarBot}>Publicar</button>    
<button id="botaoConfirma" className="botoesConfirmar" onClick={submitForm}><FcCheckmark size={30} style={{color: 'white'}}/></button> 
<button id="botaoCancela" className="botoesCancelar" onClick={apagarBot}><MdOutlineCancel size={30} /></button> 
</div>
      
 </>

      
    )
}
export default BotaoPubli
