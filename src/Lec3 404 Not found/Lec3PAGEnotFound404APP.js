import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
// import Page404 from "./PageNotFound";

function MyPNFAppLec3() {

  return (<>

    <h1>PAGE NOT FOUND 404 Lec3</h1>

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />}></Route>

        {/* <Route path="/*" element={<h1>404 Page not found</h1>} /> */}

        {/* isse jb  Page404 ke go to home per click karrega tb wo home page per jayega. */}
        {/* <Route path="/*" element={<Page404 />} /> */}


        {/* ------- */}

        {/* Lekin hm chahte hia ki agar wo galat url de to wo direct home page per redirect ho jaye, bina link per click karen.  */}
        {/*  Iske liye ek Navigate property hoti hai usko hm import karenge react-router-dom se, Aur Navigate ka ek property hoti hai "to", to ke under hm wo page ka link denge jispr hm automatically redirect hone chahte ia.   */}

        <Route path="/*" element={<Navigate to={'/'} />} />

      </Routes>

    </BrowserRouter>
  </>)

}
export default MyPNFAppLec3;