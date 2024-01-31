import { Link } from "react-router-dom";

function Page404() {

  return (<>

    <h1>404 Page.</h1>

    <p> This url is invalid. </p>
    <Link to={'/'}>Go to Home</Link>

  </>)

}
export default Page404;