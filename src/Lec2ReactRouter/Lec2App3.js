import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from "./Lec2Home2";
import About2 from "./Lec2About2";

function MyAppLec2C() {

  return (<>

    <BrowserRouter>

      <Routes>

        {/* <Home2 />
        <About2 /> */}

        <Route path='/' element={<Home2 />} />


        <Route path="/about" element={<About2 />} />



      </Routes>


    </BrowserRouter>

  </>)


}
export default MyAppLec2C;