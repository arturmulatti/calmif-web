import { FcCheckmark } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";
import Postagem from './Postagem';
import ReactDOM from 'react-dom/client'

import axios from "axios";

function BotaoPubli({submitForm}){
   
   
    
    
   
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
