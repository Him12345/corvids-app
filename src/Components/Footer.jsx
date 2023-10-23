import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import img from "../Images/logo.png";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export const Footer = () => {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the year in the footer copyright every year
    const interval = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    }, 60000); // Check every minute (adjust the interval as needed)

    return () => {
      clearInterval(interval);
    };
  }, [currentYear]);




  return (
    <div className="container-fluid footer-outer">
      <div className="row pt-4 ">
        <div className="col-md-6 img-container justify-content-center d-flex align-items-center p-3 " data-aos="fade-up"
     data-aos-duration="1200">
          <img src={img} alt="" />
        </div>

        <div className="col-md-6 justify-content-md-end d-flex align-items-center justify-content-center">
          <BsFacebook className="p-1    fs-2   me-3 facebook1" />
          <BsLinkedin className="p-1    fs-2   me-3 linkdin1" />
          <BsTwitter className="p-1    fs-2   me-3 twitter1" />
          <BsYoutube className="p-1   fs-2   me-3  youtube1" />
        </div>
      </div>

      <div className="row pt-3 link-section">
        <div className="col-md-3 justify-content-center d-flex flex-column align-items-md-center justify-content-start p-2">
          <h4 className="footer-link-heading">Resources</h4>
          <ul className="list-unstyled">
            <li>
              <Link to="#" className="footer-links ">
                Application
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-links ">
                Documentation
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-links">
                Systems
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-links">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 justify-content-center d-flex flex-column align-items-md-center p-2">
          <h4 className="footer-link-heading">Resources</h4>
          <ul className="list-unstyled">
            <li>
              <Link to="#" className="footer-links">
                Application
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-links">
                Documentation
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-links">
                Systems
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-links">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 justify-content-center d-flex flex-column align-items-md-center p-2">
          <h4 className="footer-link-heading">Resources</h4>
          <ul className="list-unstyled">
            <li>
              <Link to="#" className="footer-links">
                Application
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-links">
                Documentation
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-links">
                Systems
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-links">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 justify-content-center d-flex flex-column align-items-md-center p-2">
          <h4 className="footer-link-heading">Resources</h4>
          <ul className="list-unstyled">
            <li>
              <Link to="#" className="footer-links">
                Application
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-links">
                Documentation
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-links">
                Systems
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-links">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="row footer-copyright">
        <div className="col-12 text-center">
          <div className="d-inline-flex align-items-center justify-content-center" >
            <AiOutlineCopyrightCircle className="me-1" />
            <p className="mb-0 ml-2">{currentYear} Corvids Technology Pvt. Ltd.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
