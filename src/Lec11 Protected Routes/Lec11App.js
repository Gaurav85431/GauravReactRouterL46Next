import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import MyNavBar from "./NavBar";
import MyAbout from "./About";
import MyHome from "./Home";
// import MyPage404 from "./PageNotFound";
import MyNewNavBar from "./MyNewNavBar";
import MyUser from "./User";



import './MyLec6STYLECSS.css'
import Filter from "./Lec11Filter";
import Contact from "./contact";
import Company from "./company";
import Channel from "./channel";
import Other from "./other";
// import MyHomeLec11 from "./MyHomeLec11";
import Login from "./Login";
import Protected from "./ProtectedR";
import MyHomeLec11 from "./MyHomeLec11";

function MyAppLec11() {

  return (<>

    <h3>Lec 11</h3>



    <BrowserRouter>

      {/* <MyNavBar /> */}
      <MyNewNavBar />



      <Routes>

        {/* <Route path="/" element={<MyHomeLec11 />} /> */}

        {/* if we want ki without login Home per na jay to hm isko protected me rakenge. */}
        <Route path="/" element={<Protected Component={MyHomeLec11} />} />




        <Route path="/home" element={<MyHome />} />

        {/* without login about pr nhi ja sakte hai */}

        <Route path="/about" element={<Protected Component={MyAbout} />} />


        {/* <Route path="/about" element={<MyAbout />} /> */}


        <Route path="/login" element={<Login />} />


        {/* If we want ki bina login ke fileter per nhi ja sakte hia */}

        <Route path="/filter" element={<Protected Component={Filter} />} />
        {/* <Route path="/filter" element={<Filter />} /> */}


        <Route path="/user/:name" element={<MyUser />} />


        <Route path="/*" element={<Navigate to='/' />} />


        {/* <Route path="/contact" element={<Contact />} /> */}


        <Route path="/contact/" element={<Contact />}>

          <Route path="company" element={<Company />} />
          <Route path="channel" element={<Channel />} />
          <Route path="other" element={<Other />} />


        </Route>

      </Routes>


    </BrowserRouter>


  </>)


}
export default MyAppLec11;