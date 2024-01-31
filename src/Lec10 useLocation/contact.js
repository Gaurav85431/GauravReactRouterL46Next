// Hm chahte hia ki contact page ke under hi 3 routes open ho

import { Link, Outlet } from "react-router-dom";

// TO hm iske under Link ko define karenge 
function Contact() {


  return (<>

    <h1>Contact Us Page</h1>
    <h2>Here we have some other business</h2>

    <Link to="company">Company</Link>
    <Link to="channel">Channel</Link>
    <Link to="other">Other</Link>

    <Outlet />

  </>)


}
export default Contact;