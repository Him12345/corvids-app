import React from "react";
import { Footer } from "../Components/Footer";
import NavB from "../Components/NavB";
import { TopHeader } from "../Components/TopHeader";
import img from "../Images/Banner.jpg";
import "../Styles/Home.css";
import { Card } from "../Components/Card";
import img2 from "../Images/secure.jpg"
import { SignUp } from "./SignUp";
import Button2 from "../Components/Button2";
import {AiFillCloud} from "react-icons/ai"
import {LiaUsersSolid} from "react-icons/lia"
import {BiSupport} from "react-icons/bi"
import {FaFileCode} from "react-icons/fa"
import img5 from "../Images/img5.jpg"



export const Home = () => {
  return (
    <>
      <TopHeader />
      <NavB />

      {/* --------------------banner starts--------------------------- */}
      <div
        className="container banner-outer pt-md-5 pb-md-5"
       
      >
           
        <div className="row" data-aos="fade-up"
     data-aos-duration="2000">
          <div
            className="col-md-6  p-3 d-flex align-items-center justify-content-center flex-column"
          >
            <h5 data-aos="fade-up"
     data-aos-duration="2000">Corvids</h5>

            <h1 data-aos="fade-up"
     data-aos-duration="2000" >Cloud Based School ERP Software Solution with Mobile Apps.</h1>  

            <p className="pt-3" data-aos="fade-up"
     data-aos-duration="2000">
              With the advent of the digital era, everything is now available at
              the touch of a button with the help of advanced technologies. If
              we talk about good schools, without a doubt</p>
              
{/*               
<p>
               You've definitely come to the right place
              if you're looking for the best school management software in
              India. 
            </p>
              
              <p>
               Corvids is a one-stop shop for hassle-free
              school administration. 
            </p> */}

            <div
              className="row d-flex justify-content-between align-items-center"
           
            >
             
              <div className="col-6 p-3" >
              <Button2 name="Explore More"/>
              </div>
            </div>
          </div>

          <div
            className="col-md-6  d-flex align-items-center justify-content-center pt-4"
            data-aos="fade-up"
     data-aos-duration="2000"
          >
            <img src={img} alt="" />
          </div>
        </div>
      </div>


      {/* ---------------------------------------------banner end-------------------------- */}

      {/* --------------------what------------- */}

      <div className="container-fluid below-banner " >

      <div className="row pt-5 d-flex justify-content-center align-items-center" >
        <div className="col-md-6 d-flex justify-content-center align-items-center"  data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1200" >
          <h2>What Is School Management Software?</h2>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center para"    data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1200"  >
          <p>By incorporating cutting-edge technology into the educational sector, school ERP software creates a new platform. The digital platform can manage school management activities and make them smarter. The extensive features of school management software not only reduce the workload of the institution's employees but also streamline key functions such as fee collection, admission management, Mobile app notification, and results declaration. As a result of the reduced workload, school administration can focus on other productive activities, such as increasing student enrollment ratios and embedding new ways of learning.</p>
        </div>
      </div>


      <div className="custom-shape-divider-top-1697787784">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div>
     




      </div>

      {/* ---------------------what-------------------- */}

    <div className="container-fluid feature-section pt-md-5 "  >

    <div className="row p-md-5">

      <div className="col-md-6 d-flex justify-content-center align-items-center flex-column" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"  >
      
      

      <h2>WHICH ARE THE MOST IMPORTANT FEATURES OF <span style={{color:"#c45254",fontWeight:"500"}}>Corvids</span> SCHOOL ERP SOFTWARE?</h2>
      
      <p>Corvids school ERP software provides you with access at any time and from any location, ensuring the smooth operation of the academic process. Radical Logix manages your day-to-day administrative activities such as grades, student attendance, Exam & Result, Employee & Payroll, Fees & Accounts, Certificates, Front Office, Transportation, Hostel, Library, Canteen, and so on.</p>
      
      
      
      </div>
      <div className="col-md-6 d-flex justify-content-center align-items-center flex-column " data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"  >
      <h1>Why go for  <span style={{color:"#c45254",fontWeight:"500"}}>Corvids</span> ERP Solution?</h1>

      <div className="row d-flex justify-content-center align-items-center " >
        <div className="col-md-3 feature-icons  pt-3  d-md-flex align-items-center justify-content-center"  >
          <AiFillCloud className="fs-md-2 fs-1 pe-md-1"/> Cloud-Based
        </div>
        <div className="col-md-3 feature-icons pt-3  d-md-flex align-items-center justify-content-center"> <LiaUsersSolid className="fs-md-2 fs-1 pe-md-1"/>User Friendly</div>
        <div className="col-md-3 feature-icons pt-3 d-md-flex align-items-center justify-content-center "> <BiSupport className="fs-md-2 fs-1 pe-md-1 "/>Amazing Support</div>
        <div className="col-md-3 feature-icons pt-3  d-md-flex align-items-center justify-content-center"> <FaFileCode className="fs-md-2 fs-1 pe-md-1"/>Customizable</div>
        

      </div>

      </div>
    </div>


      </div>


     
    
    





     {/* --------------------module Overview starts-------------------------------- */}

       <div className="container-fluid module-section pt-md-4 pb-md-4">

       <h1 className="text-center" >Modules Overview (35+)</h1>
       <p className="text-center">List of Modules</p>

       <div className="row d-flex justify-content-evenly pt-2">
         <div className="col-md-2 d-flex justify-content-center align-items-center mt-3" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"   ><Card title="Enquiry Managemnet" subtitle="lorem10adhflfnlsdnfl" image={img5}/></div>
         <div className="col-md-2 d-flex justify-content-center align-items-center mt-3" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="400"
     data-aos-offset="0"   ><Card title="Enquiry Managemnet" subtitle="lorem10adhflfnlsdnfl"  image={img5}/></div>
         <div className="col-md-2 d-flex justify-content-center align-items-center mt-3" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="500"
     data-aos-offset="0"    ><Card title="Enquiry Managemnet" subtitle="lorem10adhflfnlsdnfl" image={img5}/></div>
         <div className="col-md-2 d-flex justify-content-center align-items-center mt-3" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="600"
     data-aos-offset="0"    ><Card title="Enquiry Managemnet" subtitle="lorem10adhflfnlsdnfl" image={img5}/></div>

       
       </div>

    
       <div className="row d-flex justify-content-evenly pt-2">
         <div className="col-md-2 d-flex justify-content-center align-items-center mt-3" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"   ><Card title="Enquiry Managemnet" subtitle="lorem10adhflfnlsdnfl" image={img5}/></div>
         <div className="col-md-2 d-flex justify-content-center align-items-center mt-3" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="400"
     data-aos-offset="0"   ><Card title="Enquiry Managemnet" subtitle="lorem10adhflfnlsdnfl"  image={img5}/></div>
         <div className="col-md-2 d-flex justify-content-center align-items-center mt-3" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="500"
     data-aos-offset="0"    ><Card title="Enquiry Managemnet" subtitle="lorem10adhflfnlsdnfl" image={img5}/></div>
         <div className="col-md-2 d-flex justify-content-center align-items-center mt-3" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="600"
     data-aos-offset="0"    ><Card title="Enquiry Managemnet" subtitle="lorem10adhflfnlsdnfl" image={img5}/></div>

       
       </div>
 






      



       



       </div>
     {/* --------------------module Overview ends-------------------------------- */}


{/* ----------- IS Corvids CLOUD-BASED SCHOOL MANAGEMENT SOFTWARE SECURE?------------- */}
     
    <div className="container-fluid secure-section pt-5 pb-5" >
    
    <div className="row pt-4" >
      <div className="col-md-6  d-flex flex-column justify-content-center  p-md-4 " data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
        
         <h6>IS Corvids CLOUD-BASED SCHOOL MANAGEMENT SOFTWARE SECURE?</h6>

         <p className="pt-2">With cloud-based school management software, you can simplify and automate the time-consuming school management process without compromising your security! Cloud-based school ERP includes automatic backups and a centralized database, which eliminates the risk of data loss. The role-based access efficiently controls and monitors the entire system. Take advantage of our range of reliable solutions that will best cater to the crowd of students!</p>

        <h2>Steps involved in Implementation</h2>

        <p className="pt-3">For effective use of our School ERP software solution, we follow a smooth implementation process.</p>


        <div className="step d-flex flex-column justify-content-center align-items-center"  >
        <div className="step-container mt-3 " >
             <h5 className="text-center">Data Gathering</h5>
             <p className="text-center">All data can be imported initially via data in excel files using our School Management Software import module.</p>
           </div>
           <div className="step-container mt-3 " >
             <h5 className="text-center">Gap Analysis & Customisation</h5>
             <p className="text-center">Our Relationship Manager will show how each module works and will collect any customization requests.</p>
           </div>
           <div className="step-container mt-3 " >
             <h5 className="text-center">User Training & 24 X 7 Support</h5>
             <p className="text-center">All users will receive extensive user training, and after go-live, our 24X7 support team will handle all of your queries.</p>
           </div>


        </div>

          


      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" >

     <img src={img2} alt="" />



      </div>

    

    </div>
    <div className="custom-shape-divider-top-1697806795">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>


<div className="custom-shape-divider-bottom-1697809693">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>

     


    </div>









{/* ----------- IS Corvids CLOUD-BASED SCHOOL MANAGEMENT SOFTWARE SECURE?------------- */}



      <Footer />
    </>
  );
};
