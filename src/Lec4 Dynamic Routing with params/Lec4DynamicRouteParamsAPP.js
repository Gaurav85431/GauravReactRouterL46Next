import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "../Lec2ReactRouter/Lec2About";
import NavBar from "./NavBar";
import User from "./User";

function MyAppLec4() {

  return (<>

    <BrowserRouter>


      {/* NavBar ko hm <BrowserRouter> ke under hi likhenge. */}


      <NavBar />



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} ></Route>
        {/* <Route path='/user' element={<User />} /> */}
        <Route path='/user/:name' element={<User />} />


        {/*  <Link to='/user/:name'>User</Link>  */}
        {/* To isse jo name per click karega wo link ka text aa jayega url me /user/ ke bad  */}

        <Route path='/*' element={<Navigate to="/" />} />

      </Routes>

    </BrowserRouter>


  </>)


}
export default MyAppLec4;