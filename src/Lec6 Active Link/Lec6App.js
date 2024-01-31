import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import MyNavBar from "./NavBar";
import MyAbout from "./About";
import MyHome from "./Home";
// import MyPage404 from "./PageNotFound";
import MyNewNavBar from "./MyNewNavBar";
import MyUser from "./User";

import './MyLec6STYLECSS.css'

function MyAppLec6() {

  return (<>

    <h3>Lec 6</h3>


    <BrowserRouter>

      {/* <MyNavBar /> */}
      <MyNewNavBar />



      <Routes>
        {/* declare the routes ki jb ye ho to kiya ho */}

        <Route path="/about" element={<MyAbout />} />

        <Route path="/" element={<MyHome />} />

        {/* <Route path="/user" element={<MyUser />} /> */}
        <Route path="/user/:name" element={<MyUser />} />
        {/* isse jo v link per click krega to url me user/Name aayega */}




        {/* <Route path="/*" element={<MyPage404 />} /> */}
        <Route path="/*" element={<Navigate to='/' />} />


      </Routes>


    </BrowserRouter>


  </>)


}
export default MyAppLec6;