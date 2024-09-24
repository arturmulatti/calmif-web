import { Routes, Router, createBrowserRouter,BrowserRouter,RouterProvider} from "react-router-dom";
import Login from "./views/login.jsx";
import NotFound from "./views/NotFound";
import CriarConta from "./views/CriarConta.jsx";
import ModeloComentario from "./views/ModeloComentario.jsx";
import HomePage from "./views/HomePage.jsx";
import axios from "axios";
import { useState,useEffect} from "react";
import AprovarPost from "./views/AprovarPost.jsx";
const App = () => {
    const [posts, setPosts] = useState([]);
    const [atualizarPosts, setAtualizar] = useState(true);
  
    useEffect(() => {
      if (atualizarPosts) {
        axios.get("http://localhost:8000").then((res) => {
         
          setPosts(res.data);
          setAtualizar(false);
        });
      }
    }, [atualizarPosts]);
  
    const dynamicRoutes = posts.map((post) => ({
        
      path: `/Postagem${post.id}`,
      element: <ModeloComentario titulo = {post.titulo} conteudo = {post.conteudo} id = {post.id}/>, // Passe o post como prop para o componente ModeloComentario
    }));



 const router = createBrowserRouter([
{
    
  path: '/Login',
  element: <Login/>
    

    }
,   
{
 path:'/HomePage',
 element: <HomePage/>
}
,
{
path:"/AprovarPost",
element:<AprovarPost/>
}
,
{
    path: '*',
    element: <NotFound/>
}
,
{
    path: '/CriarConta',
    element: <CriarConta/>
},
{
    path: '/Comentario',
   
    
    },
      ...dynamicRoutes,
    

]

)
return <RouterProvider router={router} />;
}
export default App;