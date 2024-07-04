import styles from "./Comentario.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import axios from "axios";
import ComentarioPequeno from "./ComentarioPequeno";
import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
export default function ContainerComentario({abrirComentario,detailsRef}){
const [dados, setDados] = useState([])
  
  useEffect(()=>{
    axios.get("http://localhost:8000/requestComentario").then(
        function(res){
            ////Lembrar de converter o resultado do arquivo em vetor
            console.log(res.data)
           setDados(res.data)
            
        }
    )
    
    
    },[]
    
    )
    return(
        <>
        
          
       
        <Accordion expanded = {abrirComentario} style={{backgroundColor:"#111417"}} >
        <AccordionSummary
          
          
          id="panel1-header"
        >
          
          <Typography color="black" style={{textAlign: "center", width: "100%",fontSize:"25px",color:"aliceblue"}} > Comentários</Typography>
          
        </AccordionSummary>

        <AccordionDetails >
          <Box sx={{flexGrow:1}}>
<Grid container spacing={3}>


        {
  
  dados.map(function(val){
        return(
           <Grid item xs = {12} sm= {6} md = {3} lg = {2} >
            <ComentarioPequeno key= {val.id} textoComentario = {val.conteudo} />
        </Grid>
            
        )
        
    }
    )
    
}
</Grid>
     </Box>
        
        <div id = "rootComentario"ref={detailsRef}></div>
        </AccordionDetails>
      </Accordion>
        </>
    )
}