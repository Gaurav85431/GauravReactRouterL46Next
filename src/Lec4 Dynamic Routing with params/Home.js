import { Link } from 'react-router-dom'
function Home() {

  return (<>

    <h1>Home</h1>
    <p>This is Home Page</p>
    <Link to={'/about'}>About</Link>



  </>)


}
export default Home;