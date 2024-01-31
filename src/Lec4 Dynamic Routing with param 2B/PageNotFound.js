import { Link } from "react-router-dom";

function MyPage404() {

  return (<>

    <h1>My 404 Page.</h1>

    <p> This url is invalid. </p>
    <Link to={'/'}>Go to Home</Link>

  </>)

}
export default MyPage404;