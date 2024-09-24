import styles from "./Comentario.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { BsReplyAll } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import ContainerDigitarComentario from "./ContainerDigitarComentario";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactDOM from 'react-dom/client';

export default function ComentarioPequeno(props) {
    const detailsRef = useRef(null);
    const [referencia, setReferencia] = useState([]);

    useEffect(() => {
        if (detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: 'smooth' });
            setReferencia(false);
        }
    }, [referencia]);

   
    function criarDigitarComentario() {
        const rootComentario = document.getElementById("rootComentario");
        const rootDiv = document.createElement('div');
        rootComentario.appendChild(rootDiv); // Adiciona a nova div após o último comentário

        ReactDOM.createRoot(rootDiv).render(
            <div ref={detailsRef}> {/* Associa o ref ao novo comentário */}
                <ContainerDigitarComentario submitForm={props.submitForm} responderComentario={criarDigitarComentario}/>
            </div>
        );
        setReferencia(true); // Aciona o efeito de scroll
    }
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Card sx={{ minWidth: 100, backgroundColor: "#181717", width: "320px", height: "320px", margin: "20px", border: '1px solid slateblue' }}>
                        <CardContent>
                            <div id="divUsuario" style={{
                                backgroundColor: "#5b606537",
                                marginLeft: "70px",
                                marginRight: "70px",
                                width: "150px",
                                borderRadius: "100px",
                                height: "24px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative"
                            }}>
                                <Typography sx={{ fontSize: 12, textAlign: "center", marginLeft: "5px" }} color="white" gutterBottom>
                                    <FaUser fill="slateblue" style={{ marginRight: "10px", height: "15px", marginTop: "8px" }} />#Anonimo 2233
                                </Typography>
                            </div>

                            <div style={{ position: "relative", marginTop: "20px" }}>
                                
                               
                                  
                               

                                <Typography variant="body2">
                                    <div className={styles.divUsuario} style={{ height: "200px", borderRadius: "2px", marginTop: "10px", position: "relative", zIndex: 0 }}>
                                        {props.textoComentario}
                                    </div>
                                </Typography>

                            </div>
                        </CardContent>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position:"relative" }}>
                            <p style={{ fontSize: "12px",top:"-10px",position:"absolute",left:"20px",visibility:"hidden"}}>@Anônimo 33234</p>
                             <button className="botaoComentario" style={{ width: "130px",top:"-10px",left:"160px",position:"absolute" }} onClick={criarDigitarComentario}>
                                 <BsReplyAll fill="slateblue" className="iconeComentario" /> Responder
                             </button>
                           </div>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
