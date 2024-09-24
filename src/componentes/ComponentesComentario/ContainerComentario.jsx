import styles from "./Comentario.module.css";
import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Grid } from "@mui/material";
import ComentarioPequeno from "./ComentarioPequeno";

export default function ContainerComentario({ abrirComentario, detailsRef, comentarios,submitForm }) {
    return (
        <>
            <Accordion expanded={abrirComentario} style={{ backgroundColor: "#111417" }}>
                <AccordionSummary id="panel1-header">
                    <Typography color="black" style={{ textAlign: "center", width: "100%", fontSize: "25px", color: "aliceblue" }}>
                        Comentários
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Box sx={{ flexGrow: 1 }} borderColor= "#6a5acd" >
                        <Grid container spacing={3}>
                            {
                                comentarios.map((val) => (
                                    <Grid item xs={12} sm={3} md={3} lg={3} key={val.id} >
                                        <ComentarioPequeno textoComentario={val.conteudo} submitForm ={submitForm}  />
                                        
                                    </Grid>
                                ))
                            }
                            <div id="rootComentario" ref={detailsRef}></div>
                        </Grid>
                    </Box>

                    
                </AccordionDetails>
            </Accordion>
        </>
    );
}
