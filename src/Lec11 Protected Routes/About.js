import { Link } from 'react-router-dom'
function MyAbout() {

  return (<>

    <h1>MyAbout</h1>
    <p>This is MyAbout Page</p>
    {/* <Link to={'/'}>Home</Link> */}

    <li> <Link to='/user/anil' state={{ name: "Gaurav Pushpam", age: 26 }}>Anil</Link>  </li>
    <li> <Link to='/user/peter'>Peter</Link>  </li>

  </>)


}
export default MyAbout;