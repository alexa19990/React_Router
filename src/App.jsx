import { RouterProvider, createBrowserRouter } from "react-router-dom"
import router from "./router.jsx"


const App = () => {
  return(
    <div>
      <RouterProvider router={createBrowserRouter(router)}/>
    </div>
  )
}

export default App