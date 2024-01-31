import { Link } from "react-router-dom";

function MyNewNavBar() {


  // Jaise node me routes hota hai wahi hai ye.
  // isko <a> tag ke jaise samajh skte hai.
  // Isme ye declare ki about link per click karenge to kon sa url jayega.
  // MyApp file me each url pr kon page open hoga wo likha hai.

  return (<>

    <h1>Hello My new NavBar</h1>

    {/* <Link to='/a' element={<h2>a</h2>}>Home</Link> */}


    <ul>
      <li> <Link to='/' >Home</Link>   </li>
      <li> <Link to='/about'>About</Link></li>

      <li> <Link to='/contact'>Contact</Link></li>
      {/* <li> <Link to='/user'>User</Link>  </li> */}
      <li> <Link to='/user/anil'>Anil</Link>  </li>
      <li> <Link to='/user/peter'>Peter</Link>  </li>


    </ul>

  </>)

}
export default MyNewNavBar;