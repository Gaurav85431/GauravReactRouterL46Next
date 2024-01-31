import { Link } from "react-router-dom";
// 
import { useLocation } from "react-router-dom";

function MyHomeLec11() {

  const location = useLocation();
  console.log(location);

  return (<>

    <h1>MYHOME Lec11</h1>
    <p>This is react router</p>
    <p>We are learning react router</p>
    <Link to='/about'>Go to About Page</Link>



  </>)



}
export default MyHomeLec11;