import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Lec2Home";
import About from "./Lec2About";
import NavBar from "./Lec2BNavBar";

function MyAppLec2B() {

  return (<>

    <BrowserRouter>

      {/* link of home and about */}

      <NavBar />

      <Routes>


        <Route path='/' element={<Home />} />


        <Route path="/about" element={<About />} />





      </Routes>

      {/* Link reusable hia to isko dobara v use kar sakte hia. */}

      <NavBar />

    </BrowserRouter>

  </>)


}
export default MyAppLec2B;