import styles from "./criarConta.module.css";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ContainerCriarConta() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    senhaConfirma: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    senha: false,
    senhaConfirma: false,
    mensagemEmail: "",
    mensagemSenha: "",
    mensagemConfirma: "",
  });

  const setTextoEmail = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const setTextoSenha = (event) => {
    setFormData({ ...formData, senha: event.target.value });
  };

  const setTextoSenhaConfirma = (event) => {
    setFormData({ ...formData, senhaConfirma: event.target.value });
  };

  const http = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
      "content-type": "application/json",
    },
  });
  const navigate = useNavigate();
  const cadastrarUsuario = () => {
    let emailError = false;
    let senhaError = false;
    let senhaConfirmaError = false;
    let mensagemEmail = "";
    let mensagemSenha = "";
    let mensagemConfirma = "";

    if (formData.email === "") {
      emailError = true;
      mensagemEmail = "O campo deve ser preenchido!";
    }

    if (formData.senha === "") {
      senhaError = true;
      mensagemSenha = "O campo deve ser preenchido!";
    }

    if (formData.senhaConfirma === "" || formData.senha !== formData.senhaConfirma) {
      senhaConfirmaError = true;
      mensagemConfirma = "O campo deve ser preenchido ou as senhas não conferem!";
    }

    setErrors({
      email: emailError,
      senha: senhaError,
      senhaConfirma: senhaConfirmaError,
      mensagemEmail: mensagemEmail,
      mensagemSenha: mensagemSenha,
      mensagemConfirma: mensagemConfirma,
    });
    
    if (!emailError && !senhaError && !senhaConfirmaError) {
      http.post('cadastroUser', { email: formData.email, password: formData.senha })
        .then(res => console.log(res))
        .catch(err => console.error(err));
       
        return navigate("/Login")
    }
    
  };

  return (
    <>
      <div className={styles.containerInput}>
        <p style={{ marginTop: "15px", marginLeft: "300px", fontSize: "40px" }}>Criar Conta</p>
        <TextField
          id="campoEmail"
          label="Email"
          variant="outlined"
          className="ContainerSenha"
          sx={{ input: { color: 'white', backgroundColor: "#111417", border: "solid #111417 1px" }, InputLabelProps: { focused: { border: "white" } } }}
          InputLabelProps={{ style: { color: 'white' } }}
          style={{ top: "50px", left: "50%" }}
          onChange={setTextoEmail}
          error={errors.email}
        />
        <p className={styles.textoAviso}>{errors.mensagemEmail}</p>
        <TextField
          id="campoSenha"
          label="Senha"
          variant="outlined"
          className="ContainerSenha"
          sx={{ input: { color: 'white', backgroundColor: "#111417", border: "solid #111417 1px" }, InputLabelProps: { focused: { border: "white" } } }}
          InputLabelProps={{ style: { color: 'white' } }}
          style={{ top: "50px", left: "50%" }}
          onChange={setTextoSenha}
          type="password"
          error={errors.senha}
        />
        <p className={styles.textoAviso}>{errors.mensagemSenha}</p>
        <TextField
          id="campoConfirmaSenha"
          label="Confirmar senha"
          variant="outlined"
          className="ContainerSenha"
          sx={{ input: { color: 'white', backgroundColor: "#111417", border: "solid #111417 1px" }, InputLabelProps: { focused: { border: "white" } } }}
          InputLabelProps={{ style: { color: 'white' } }}
          style={{ top: "50px", left: "50%" }}
          onChange={setTextoSenhaConfirma}
          type="password"
          error={errors.senhaConfirma}
        />
        <p className={styles.textoAviso}>{errors.mensagemConfirma}</p>
        <button className={styles.botaoCriar} onClick={cadastrarUsuario}><p style={{ fontSize: "15px" }}>Criar conta</p></button>
      </div>
    </>
  );
}

export default ContainerCriarConta;
