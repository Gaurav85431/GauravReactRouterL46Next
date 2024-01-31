import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
function MyAppLec1() {

  return (<>

    <BrowserRouter>

      <Routes>

        {/* <Route path="/Home" element={<h1>My Home Page</h1>}></Route> */}
        {/* <Route path="/" element={<h1>My Home Page</h1>}></Route> */}

        {/* Home Page */}
        <Route path='/' element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />





      </Routes>


    </BrowserRouter>

  </>)


}
export default MyAppLec1;