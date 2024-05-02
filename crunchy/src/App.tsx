import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Gallery from "./components/Gallery"
const router = createBrowserRouter([
  {path:'/' ,element:<Layout/>, children:[
    {path:'/', element:<Home/>}
    
  ]}
])
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    <Gallery/>
    
    </>
  )
}



export default App
