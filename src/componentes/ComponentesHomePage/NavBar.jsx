import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { FaHandsHelping } from "react-icons/fa";
import InputBase from "@mui/material/InputBase";
import { FaSearch } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function NavBar(props) {
  const navigate = useNavigate();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10, // Garantir que o ícone esteja acima do campo de pesquisa
    cursor: "pointer", // Tornar o contêiner do ícone clicável
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "800px", // Ajustado para ocupar 800px em telas maiores
      },
    },
  }));
  function toAprovar (){
    navigate("/AprovarPost")
  }
  function toRelatos(){
    navigate("/Relatos")
  }
  return (
    <div className="div-1">
      <img src={"/Calmif (1).png"} alt="IFPR" className="imagemIF" />

      <button
        className="botaoNavBar"
        style={{
          marginLeft: "20px",
          width: "189px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={toRelatos}
      >
        <FaBookOpen style={{ marginRight: "5px" }} />
        Relatos motivacionais
      </button>

      <button
        className="botaoNavBar"
        style={{ marginLeft: "20px", width: "129px", height: "30px" }}
      >
        <FaLayerGroup style={{ marginRight: "5px" }} />
        Grupos
      </button>
      <button
        className="botaoNavBar"
        style={{
          marginLeft: "20px",
          width: "175px",
          height: "30px",
          border: "black",
        }}
        onClick={toAprovar}
      >
        <FaClipboardCheck style={{ marginRight: "5px" }} size={16}/>
        Aprovar postagens
      </button>
      <Search>
        <SearchIconWrapper>
          <FaSearch style={{ cursor: "pointer" }} onClick={props.pesquisar} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          className="textAreaPesquisa"
          style={{ width: "740px" }}
          id="barraDePesquisa"
        />
      </Search>
      <div className="botaoSair">
        <MdExitToApp size={25} style={{ fill: "red", cursor: "pointer" }} />
      </div>
    </div>
  );
}
export default NavBar;
