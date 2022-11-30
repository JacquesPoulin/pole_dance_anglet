// --- REACT ---
import React, { useState } from "react";

// ----- react-icons Components  -----
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// ----- react-toastify Components  -----
import {
  Bounce,
  Flip,
  Slide,
  toast,
  ToastContainer,
  Zoom,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// --- DATAS ---
import navbarList from "../../data/navbarList";

const footer = () => {
  // >> STATES
  const [email, setEmail] = useState("");

  // >> Toastify functions
  const notify = () => {
    <ToastContainer
      position="top-center"
      autoClose={5000}
      transition={Slide}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />;

    toast.success(`Vous êtes bien inscrit à la newsletter !`, {
      position: "top-center",
      autoClose: 5000,
      transition: Flip,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setEmail("");
  };

  return (
    <div className="footer">
      <h1>FOOTER</h1>
    </div>
  );
};

export default footer;
