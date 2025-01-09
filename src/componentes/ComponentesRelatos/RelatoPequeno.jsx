import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useState } from "react";
import { MdAddBox } from "react-icons/md";
import styles from "./relatos.module.css";
import axios from "axios";
export default function RelatoPequeno(props){
    return(
        <>
        <Card
          sx={{
            minWidth: 100,
            backgroundColor: "#111417",
            width: "420px",
            height: "450px",
            margin: "20px",
            marginRight:"10px",
            marginLeft:"10px",
            border: "1px solid slateblue",
          }}
        >
          <CardContent>
            
              <p style={{ textAlign: "center",fontSize:"25px"}}>{props.titulo}</p>
             <br />
            <p>
            {props.conteudo}
            
            </p>
          </CardContent>
        </Card>
        
        
        </>
    )
}