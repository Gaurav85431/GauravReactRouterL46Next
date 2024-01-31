import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import MyNavBar from "./NavBar";
import MyAbout from "./About";
import MyHome from "./Home";
// import MyPage404 from "./PageNotFound";
import MyNewNavBar from "./MyNewNavBar";
import MyUser from "./User";



import './MyLec6STYLECSS.css'
import Filter from "./Lec10Filter";
import Contact from "./contact";
import Company from "./company";
import Channel from "./channel";
import Other from "./other";
import MyHomeLec10 from "./MyHomeLec10";

function MyAppLec10() {

  return (<>

    <h3>Lec 10</h3>


    <BrowserRouter>

      {/* <MyNavBar /> */}
      <MyNewNavBar />



      <Routes>

        <Route path="/" element={<MyHomeLec10 />} />

        <Route path="/home" element={<MyHome />} />

        <Route path="/about" element={<MyAbout />} />


        <Route path="/filter" element={<Filter />} />


        <Route path="/user/:name" element={<MyUser />} />


        <Route path="/*" element={<Navigate to='/' />} />


        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* hme contact route ko nested routes banana hai i.e. iske under hme aur routes banana hai, to iske liye hme contact ke baad '/' lagana hoga.   */}

        <Route path="/contact/" element={<Contact />}>

          <Route path="company" element={<Company />} />
          <Route path="channel" element={<Channel />} />
          <Route path="other" element={<Other />} />


        </Route>

      </Routes>


    </BrowserRouter>


  </>)


}
export default MyAppLec10;