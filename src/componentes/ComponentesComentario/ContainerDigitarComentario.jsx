import React, { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import styles from "./Comentario.module.css";
import { FaUser } from "react-icons/fa";

export default function ContainerDigitarComentario({ submitForm ,responderComentario}) {
    const [textoComentario, setTextoComentario] = useState("");

    

    return (
        <>
            <Grid container spacing={2} >
                <Grid id = "containerDigitar" item xs={12} sm={6} >
                    <Card  sx={{ minWidth: 100, backgroundColor: "#181717", width: "320px", margin: "20px", border: '1px solid slateblue' }}>
                        <CardContent >
                        <div id="divUsuario" style={{
                                    backgroundColor: "#5b606537",
                                    marginLeft: "70px",
                                    marginRight: "70px",
                                    width: "150px",
                                    borderRadius: "100px",
                                    height: "24px",
                                    display:"flex",
                                    justifyContent:"center",
                                    alignItems:"center"
                                    
                                      // Centraliza vertical e horizontalmente
                                }}>
                                    <Typography sx={{ fontSize: 12, textAlign: "center",marginBottom:"5px" }} color="white" gutterBottom>
                                        
                                        <FaUser fill="slateblue" style={{ marginRight: "10px", height: "15px",marginTop:"8px" }}/>#Anonimo 2233
                                    </Typography>
                                </div>
                            <textarea
                                className={styles.textAreaDiv}
                                placeholder="Adicionar comentário..."
                                id="textoComentario"
                                
                                rows="2"
                                style={{
                                    width: "100%",
                                    height:"200px",
                                    backgroundColor: "#5b606537",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    boxSizing: "border-box",
                                    fontFamily: "Arial, sans-serif",
                                    fontSize: "14px",
                                    marginTop:"20px"
                                }}
                            ></textarea>
                        </CardContent>
                        <CardActions>
                            
                            <button className="botaoAdd"  onClick={submitForm} style={{marginLeft:"100px",borderRadius:"5px"}}>
                                Adicionar
                            </button>
                            
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
