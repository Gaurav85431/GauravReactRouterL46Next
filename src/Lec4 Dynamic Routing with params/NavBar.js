import { Link } from "react-router-dom";

function NavBar() {

  return (<>

    <ul>
      <li> <Link to='/' >Home</Link>   </li>
      <li> <Link to='/about'>About</Link></li>
      {/* contact nhi hai. fir v uska hm link diye hai to wo /* me chalega i.e. defalt */}
      <li> <Link to='/contact'>Contact</Link></li>
      {/* <li> <Link to='/user'>User</Link>  </li> */}


    </ul>

  </>)

}
export default NavBar;