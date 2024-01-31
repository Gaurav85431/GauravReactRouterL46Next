import { Link, NavLink } from "react-router-dom";

function MyNewNavBar() {

  return (<>

    <ul className="navbar">

      {/* <li> <Link to='/' >Home</Link>   </li>
      <li> <Link to='/about'>About</Link></li>

      <li> <Link to='/contact'>Contact</Link></li>
      <li> <Link to='/user'>User</Link>  </li> */}



      {/* <li> <NavLink className="nav-bar-link" to='/' >Home</NavLink>   </li>
      <li> <NavLink className="nav-bar-link" style={{ color: 'pink' }} to='/about'>About</NavLink></li>
      <li> <NavLink className="nav-bar-link" to='/contact'>Contact</NavLink></li> */}


      <li> <Link to='/filter'>Filter</Link></li>




      {/* 2nd way of active link */}
      <li> <NavLink style={({ isActive }) => { return { backgroundColor: isActive ? 'green' : 'red' } }} className="nav-bar-link" to='/' >Home</NavLink>   </li>

      <li> <NavLink style={({ isActive }) => { return { backgroundColor: isActive ? 'green' : 'red' } }} className="nav-bar-link" to='/about'>About</NavLink></li>

      <li> <NavLink style={({ isActive }) => { return { backgroundColor: isActive ? 'green' : '' } }} className="nav-bar-link" to='/contact'>Contact</NavLink></li>

      {/* <li>  style={({ isActive }) => { return { backgroundColor: isActive ? 'green' : 'red' } }} <NavLink className="nav-bar-link" to='/contact'>Contact</NavLink></li> */}



    </ul>

  </>)

}
export default MyNewNavBar;