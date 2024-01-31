// isme hm dusre component ko as a props pass kar sakte hia. Fir agar wo login hai tab hi us component ko access kar sakta hia.

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {

  // agar without login home per jana chahiyenge to wo redirect kar dega Login page per
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem('login');
    if (!login) {
      navigate('/login');
    }
  });

  return (<>

    <Component />


  </>)

}
export default Protected;