import Home from "./Home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./About";

function App() {
 
  return (
    <>
    <BrowserRouter>
    <nav>
       <Link to="/Home">Home</Link> {" | "}
     <Link to="/About">About</Link>
      </nav>

    <Routes>
     <Route path="/Home" element={<Home/>}></Route>

     <Route path="/About" element={<About/>}></Route>
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;