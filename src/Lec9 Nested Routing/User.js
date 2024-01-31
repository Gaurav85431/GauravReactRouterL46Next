import { useParams } from "react-router-dom";
function MyUser() {

  // isme wo name aayega jo ki url per user/name me hoga.
  const params = useParams();
  const { name } = params;
  console.log(name);

  return (<>


    {/* <h1>This is my user page</h1> */}
    <h1>This is {name}'s page</h1>


  </>)


}
export default MyUser;