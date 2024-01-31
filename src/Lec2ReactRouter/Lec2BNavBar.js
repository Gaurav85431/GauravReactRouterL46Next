// in this wee will give link here and export it to some  other file

import { Link } from "react-router-dom";

const NavBar = () => {

  return (<>

    {/* 
    <Link to='/about'>About</Link>

    <br />

    <Link to='/'>Home</
    Link> */}



    {/* isko hm aise v likha sakte hia. */}
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/">Home</Link></li>
    </ul>

  </>)

}
export default NavBar;