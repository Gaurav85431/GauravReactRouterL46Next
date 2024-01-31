import { Link } from 'react-router-dom'
function MyHome() {

  return (<>

    <h1>MyHome</h1>
    <p>This is MyHome Page</p>
    <Link to={'/about'}>About</Link>

  </>)


}
export default MyHome;