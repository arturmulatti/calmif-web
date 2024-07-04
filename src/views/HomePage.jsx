import React from 'react'
import NavBar from '../componentes/NavBar.jsx'
import { useEffect, useState } from "react";
import axios from 'axios';
import ContainerDigitar from '../componentes/ContainerDigitar.jsx'
import Postagem from '../componentes/Postagem.jsx';




 function HomePage(){
   
    var [posts,setPosts] = useState([]);

    
    useEffect(()=>{
        axios.get("http://localhost:8000").then(
            function(res){
                ////Lembrar de converter o resultado do arquivo em vetor
                console.log(res.data)
                setPosts(Array.from(res.data))
                
            }
        )
        
        
        },[]
        
        )
       
       
    return(
        
        <div>
  <React.StrictMode>
    <NavBar/>
    
    
    <ContainerDigitar/>
    
{
  
  posts.map(function(val){
        return(
           
            <Postagem key= {val.id} titulo = {val.titulo} texto = {val.conteudo}   idConetudo= {val.id} />
           
           
        
        )
        
    }
    )
    
}

    
  
    </React.StrictMode>
        </div>
        
    )
}
export default HomePage