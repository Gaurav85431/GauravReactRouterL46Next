import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import MyNavBar from "./NavBar";
import MyAbout from "./About";
import MyHome from "./Home";
// import MyPage404 from "./PageNotFound";
import MyNewNavBar from "./MyNewNavBar";
import MyUser from "./User";



import './MyLec6STYLECSS.css'
import Filter from "./Lec7Filter";

function MyAppLec7() {

  return (<>

    <h3>Lec 7</h3>


    <BrowserRouter>

      {/* <MyNavBar /> */}
      <MyNewNavBar />



      <Routes>

        <Route path="/about" element={<MyAbout />} />

        <Route path="/" element={<MyHome />} />


        <Route path="/filter" element={<Filter />} />


        <Route path="/user/:name" element={<MyUser />} />



        <Route path="/*" element={<Navigate to='/' />} />








      </Routes>


    </BrowserRouter>


  </>)


}
export default MyAppLec7;