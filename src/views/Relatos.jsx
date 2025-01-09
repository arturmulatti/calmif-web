import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ContainerRelato from "../componentes/ComponentesRelatos/ContainerRelato";
import NavBar from "../componentes/ComponentesHomePage/NavBar"
import { FaArrowLeft } from "react-icons/fa6";
export default function Relatos(props) {
  return (
    <>
    
   
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          marginBottom:"80px",
          height: "100vh",
        }}
      >
        <div
          style={{ background: "#1a1f24", height: "500px", width: "2000px", display:"flex",alignItems:"center" }}
        >
         <ContainerRelato/>
        </div>
      </div>
    </>
  );
}
