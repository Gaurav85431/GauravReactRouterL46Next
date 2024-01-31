import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Lec2Home";
import About from "./Lec2About";
function MyAppLec2() {

  return (<>

    <BrowserRouter>

      <Link to='/about'>About</Link>
      <br />
      <Link to='/'>Home</Link>



      <Routes>

        {/* Home Page */}
        <Route path='/' element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />





      </Routes>


    </BrowserRouter>

  </>)


}
export default MyAppLec2;