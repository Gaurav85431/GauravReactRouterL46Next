import { Link, NavLink } from "react-router-dom";

function MyNewNavBar() {

  return (<>

    <ul className="navbar">




      <li> <Link to='/filter'>Filter</Link></li>




      <li> <NavLink style={({ isActive }) => { return { backgroundColor: isActive ? 'green' : 'red' } }} className="nav-bar-link" to='/' >Home</NavLink>   </li>

      <li> <NavLink style={({ isActive }) => { return { backgroundColor: isActive ? 'green' : 'red' } }} className="nav-bar-link" to='/about'>About</NavLink></li>



      <li> <NavLink style={({ isActive }) => { return { backgroundColor: isActive ? 'green' : '' } }} className="nav-bar-link" to='/contact'>Contact</NavLink></li>





      <li>
        <NavLink className="nav-bar-link" to="/login">Login</NavLink>
      </li>




    </ul>

  </>)

}
export default MyNewNavBar;