import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './route.jsx'
import { RouterProvider } from 'react-router-dom'
import ContainerDigitar from './componentes/ContainerDigitar.jsx'


ReactDOM.createRoot(document.getElementById('root1')).render(

  <React.StrictMode>
    
  <RouterProvider router={router }/>
  

  
  


  </React.StrictMode>


)

function Apps (){
  
  return(
    <div className='Apps'>
       


</div>
  
)
}
export default Apps

