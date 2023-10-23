import { Home } from "./pages/Home"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import { Contact } from "./pages/Contact"
import Blog from "./pages/Blog"
import ErpModule from "./pages/ErpModule"
import { Aboutus } from "./pages/Aboutus"
function App() {

  return (
    <Router>
    <Routes>


   <Route exact path="/"  element={<Home/>}/>
   <Route exact path="/contact" element={<Contact/>}/>
   <Route exact path="/blog" element={<Blog/>}/>
   <Route exact path="/erpmodule" element={<ErpModule/>}/>
   <Route exact path="/aboutus" element={<Aboutus/>}/>







    </Routes>
    </Router>
  )
}

export default App
