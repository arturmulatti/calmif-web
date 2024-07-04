import { Outlet } from "react-router-dom";

export default function defaultTema(){
    return(
        
        <div>
            <div>
                Eai meu chapa
                <Outlet/>
            </div>
        </div>
        
    )
}