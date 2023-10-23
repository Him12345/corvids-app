import React from "react";
import "../Styles/TopHeader.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsFillTelephoneForwardFill } from "react-icons/bs";


export const TopHeader = () => {
  return (
    <div className="container-fluid outer ">

                                           
      <div className="row top-header-text " >

        <div
          className="col-2 p-2  contact  align-items-center justify-content-end d-none d-md-flex"
        >
          <BsFillTelephoneForwardFill className=" icons px-2" />
           +91 7876745362
        </div>


        <div
          className="col-3 mail d-flex align-items-center d-none d-md-flex"
        >
          contact@gmail.com
        </div>


        <div
          className="col-md-7  d-flex align-items-center justify-content-md-end justify-content-center "
        >
          <div className="icons-container">
            <FaFacebookF className=" icons p-1 mx-md-2  facebook" />
            <AiOutlineTwitter className=" icons p-1  mx-md-2 twitter" />
            <AiFillLinkedin className=" icons p-1  mx-md-2 linkdin" />
            <AiFillYoutube className=" icons p-1  mx-md-2 youtube" />
          </div>
        </div>
      </div>
    </div>
  );
};
