import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function MyUser() {

  const params = useParams();
  const { name } = params;
  console.log(name);

  const location = useLocation();
  console.log(location);

  return (<>


    <h1>This is {name}'s page</h1>


  </>)


}
export default MyUser;