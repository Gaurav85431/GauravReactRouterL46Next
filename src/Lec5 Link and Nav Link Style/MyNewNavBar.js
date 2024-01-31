import { /* Link, */ NavLink } from "react-router-dom";

function MyNewNavBar() {

  return (<>

    <ul className="navbar">

      {/* <li> <Link to='/' >Home</Link>   </li>
      <li> <Link to='/about'>About</Link></li>

      <li> <Link to='/contact'>Contact</Link></li>
      <li> <Link to='/user'>User</Link>  </li> */}

      {/* Hm Link per class nhi laga sakte hia to iske liye hm NavLink ko import kar lenge aur <NavLink> me className ko lagayenge*/}

      {/* li taki looking aacha ho list me */}
      <li> <NavLink className="nav-bar-link" style={{ color: 'pink' }} to='/' >Home</NavLink>   </li>
      <li> <NavLink className="nav-bar-link" to='/about'>About</NavLink></li>
      <li> <NavLink className="nav-bar-link" to='/contact'>Contact</NavLink></li>

    </ul>

  </>)

}
export default MyNewNavBar;