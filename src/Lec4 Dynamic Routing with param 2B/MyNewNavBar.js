import { Link } from "react-router-dom";

function MyNewNavBar() {

  return (<>

    <h1>Hello My new NavBar</h1>

    <ul>
      <li> <Link to='/' >Home</Link>   </li>
      <li> <Link to='/about'>About</Link></li>

      <li> <Link to='/contact'>Contact</Link></li>
      {/* <li> <Link to='/user'>User</Link>  </li> */}

      {/*
        Isko hm routes me likhenge.

      <li> <Link to='/user/anil'>Anil</Link>  </li>
      <li> <Link to='/user/peter'>Peter</Link>  </li> */}


    </ul>

  </>)

}
export default MyNewNavBar;