import { Link } from "react-router-dom";

function Home2() {

  return (<>

    <h1>Home Page</h1>


    <p> THis is my favourite thing.</p>
    <p> Hello React is a single page application javascript library given by facebook in 2013 and now it is open source</p>

    {/* Iske under LInk banana */}

    <Link to='/about'>Go to About Page</Link>






  </>)

}
export default Home2;