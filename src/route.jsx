import { Route, Router, createBrowserRouter,BrowserRouter} from "react-router-dom";
import Login from "./views/login.jsx";
import NotFound from "./views/NotFound";
import CriarConta from "./views/CriarConta.jsx";
import ModeloComentario from "./views/ModeloComentario.jsx";
import HomePage from "./views/HomePage.jsx";

const router =  createBrowserRouter([
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
    element: <ModeloComentario/>
}

]

)
export default router;