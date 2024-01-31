import { Link, useNavigate } from 'react-router-dom'
function MyHome() {

  const navigate = useNavigate();

  // Navigation on click

  // {/* 1st WAY */ }
  // {/* isko functino ke rop me bana denge jhan per use hoga wha pr call kr ddenge */ }

  const navToPage = () => {

    // let x = false;
    let x = true;
    if (x) {
      navigate('/about')
    }
    else {
      navigate('/filter')
    }


  }


  // 3rd way
  // isme directly hm URL ko pass kar denge. i.e. jis pr click krenge usi ka url aa jayega
  const MyNavToPage = (url) => {

    navigate(url);

  }
  // 3rd way declearation end

  return (<>

    <h1>MyHome</h1>
    <p>This is MyHome Page</p>
    <Link to={'/about'}>About</Link>

    {/* Lec 8   */}
    <br />


    {/* 1st way ka use */}
    <button onClick={() => navToPage()} >Go to about Page</button>
    <br />
    <button onClick={() => navToPage}>Go to filter page </button>





    <br /> <br /><br /><br />


    {/* 2nd WAY */}

    <button onClick={() => navigate('/about')} >Go to about Page</button>
    <br />
    <button onClick={() => navigate('/filter')}>Go to filter page </button>




    {/* 3rd way */}

    <br /><br /><br /><br />
    <button onClick={() => MyNavToPage('/about')} >Go to about Page</button>
    <br></br>
    <button onClick={() => MyNavToPage('/filter')} >Go to filter Page</button>
    <br />
    {/* <button onClick={() => MyNavToPage('/filter')}>Go to filter page </button> */}





  </>)


}
export default MyHome;