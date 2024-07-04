import styles from "./login.module.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ContainerSenha() {
  const http = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
      "content-type": "application/json",
    },
  });

  const [dados, setDados] = useState({
    email: "",
    senha: "",
  });

  const [resultadoLogin, setResultadoLogin] = useState();
  const [textoErro, setTextoErro] = useState([""]);

  const setEmail = (event) => {
    setDados({ ...dados, email: event.target.value });
  };

  const setSenha = (event) => {
    setDados({ ...dados, senha: event.target.value });
  };

  const navigate = useNavigate();

  const logar = async () => {
    try {
      await http.post('LoginEmail', { email: dados.email, password: dados.senha });

      const res = await axios.get("http://localhost:8000/login");
      setResultadoLogin(res.data);
      console.log(res.data);

      if (res.data == 1) {
        navigate("/HomePage");
      } else {
        setTextoErro("Email ou senha inválidos!");
      }
    } catch (err) {
      console.error(err);
      setTextoErro("Erro ao realizar login. Por favor, tente novamente.");
    }
  };

  return (
    <div className={styles.containerInput}>
      <p style={{ marginTop: "40px", marginLeft: "345px", fontSize: "40px", marginBottom: "5px" }}>Login</p>
      <TextField
        id="campoEmail"
        label="Email"
        variant="outlined"
        className="ContainerSenha"
        sx={{ input: { color: 'white', backgroundColor: "#111417", border: "solid #111417 1px" }, InputLabelProps: { focused: { border: "white" } } }}
        InputLabelProps={{ style: { color: 'white' } }}
        style={{ top: "40px", left: "50%" }}
        onChange={setEmail}
      />
      <p className={styles.textoAviso} style={{ marginLeft: "160px" }}>{textoErro}</p>
      <TextField
        id="campoSenha"
        label="Senha"
        variant="outlined"
        type="password"
        className="ContainerSenha"
        sx={{ input: { color: 'white', backgroundColor: "#111417", border: "solid #111417 1px" }, InputLabelProps: { focused: { border: "white" } } }}
        InputLabelProps={{ style: { color: 'white' } }}
        style={{ top: "40px", left: "50%" }}
        onChange={setSenha}
      />
      <div style={{ position: "absolute", top: "255px" }}>
        <p className={styles.textoEsqueceu}>Esqueceu a senha?</p>
        <button className={styles.botaoCriar} onClick={logar}>
          <p style={{ fontSize: "15px" }}>Login</p>
        </button>
        <p style={{ marginLeft: "365px", fontSize: "13px" }} className={styles.hooverTexto} >Cadastre-se</p>
      </div>
    </div>
  );
}

export default ContainerSenha;
