import React from 'react'
import NavB from '../Components/NavB'
import { TopHeader } from '../Components/TopHeader'
import { Footer } from '../Components/Footer'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Link} from "react-router-dom"
import {BsChevronDoubleRight} from "react-icons/bs"
import Accordion from 'react-bootstrap/Accordion';

import "../Styles/ERP.css"
import img1 from "../Images/img1.jpg"
import img2 from "../Images/img2.jpg"
import img3 from "../Images/img3.jpg"
import img4 from "../Images/img4.jpg"
import img5 from "../Images/img5.jpg"
import img6 from "../Images/img6.jpg"
import img7 from "../Images/img7.jpg"
import img8 from "../Images/img8.jpg"
import img9 from "../Images/img9.jpg"




const ErpModule = () => {
  return (
      <>
      <TopHeader/>
      <NavB/>


   


<div className='gallery'>

<div className='h-stretch'>
  <img src={img1} alt="" />
</div>

<div   className='v-stretch'>
  <img src={img2} alt="" />
</div>

<div className='big-stretch'>
  <img src={img9} alt="" />
</div>

<div className='h-stretch'>
  <img src={img8} alt="" />
</div>

<div className='v-stretch'>
  <img src={img5} alt="" />
</div>

<div className='v-stretch'>
  <img src={img6} alt="" />
</div>

<div>
  <img src={img7} alt="" />
</div>




     
             
    </div>



      
    <div className="container erp-module-wrapper mb-5 " >


     <div className="row mt-5" >


       <div className="col-4 p-4 d-flex flex-column justify-content-center align-items-center" >
       
       
       
        <div className='links'>
          <Link style={{textDecoration:"none",color:"black"}}>Enquiry Management<BsChevronDoubleRight/></Link>
        </div>

        <div className='links'>
          <Link style={{textDecoration:"none",color:"black"}}>Enquiry Management<BsChevronDoubleRight/></Link>
        </div>

        <div className='links'>
          <Link style={{textDecoration:"none",color:"black"}}>Enquiry Management<BsChevronDoubleRight/></Link>
        </div>

        <div className='links'>
          <Link style={{textDecoration:"none",color:"black"}}>Enquiry Management<BsChevronDoubleRight/></Link>
        </div>


   
       
        <div className='links'>
          <Link style={{textDecoration:"none",color:"black"}}>Enquiry Management<BsChevronDoubleRight/></Link>
        </div>

        <div className='links'>
          <Link style={{textDecoration:"none",color:"black"}}>Enquiry Management<BsChevronDoubleRight/></Link>
        </div>

        <div className='links'>
          <Link style={{textDecoration:"none",color:"black"}}>Enquiry Management<BsChevronDoubleRight/></Link>
        </div>

        <div className='links'>
          <Link style={{textDecoration:"none",color:"black"}}>Enquiry Management<BsChevronDoubleRight/></Link>
        </div>


        <div className='links'>
          <Link style={{textDecoration:"none",color:"black"}}>Enquiry Management<BsChevronDoubleRight/></Link>
        </div>

        <div className='links'>
          <Link style={{textDecoration:"none",color:"black"}}>Enquiry Management<BsChevronDoubleRight/></Link>
        </div>

        <div className='links'>
          <Link style={{textDecoration:"none",color:"black"}}>Enquiry Management<BsChevronDoubleRight/></Link>
        </div>

        <div className='links'>
          <Link style={{textDecoration:"none",color:"black"}}>Enquiry Management<BsChevronDoubleRight/></Link>
        </div>


   
       
        <div className='links'>
          <Link style={{textDecoration:"none",color:"black"}}>Enquiry Management<BsChevronDoubleRight/></Link>
        </div>

        <div className='links'>
          <Link style={{textDecoration:"none",color:"black"}}>Enquiry Management<BsChevronDoubleRight/></Link>
        </div>

        <div className='links'>
          <Link style={{textDecoration:"none",color:"black"}}>Enquiry Management<BsChevronDoubleRight/></Link>
        </div>

        <div className='links'>
          <Link style={{textDecoration:"none",color:"black"}}>Enquiry Management<BsChevronDoubleRight/></Link>
        </div>

     
     
       
     
     
       
       
       
       
       
       </div>


       <div className="col-8 p-4" >


       <h1>Enquiry Management</h1>
       <p className='pt-3'>Schools are often approached by prospective students, parents and staff regarding registrations or admissions, fee structure and jobs, respectively. With this module of our School Management Software managing enquiries and taking follow up becomes easy.</p>

       
       <div className="key-feature pt-2 mt-5 mb-5 d-flex align-items-center justify-content-around" >

               <div className="feature-img" >
            <img src={img4} alt="" />
          </div>

          <div className="feature-points p-3" >
          <ul>
          <h3>Key Features</h3>

            <li>Acknowledgement SMS to Enquiries</li>
            <li>Follow Up Management</li>
            <li>Bulk Follow up SMS</li>
            <li>Approval process</li>
            <li>One click enquiry view</li>
            <li>Generate Prospectus sale receipts</li>
          </ul>


          </div>

       </div>

     <div className="sub-modules p-4 mt-4 mb-4">
     <h2>Sub Modules</h2>

     <div className="modules d-flex justify-content-around align-items-center flex-wrap"  >
       <div className="m m-2"   >Follow Up</div>
       <div className="m m-2"   >Prospectus Sale</div>
       <div className="m m-2"   >Approvals</div>
       <div className="m m-2"   >Website Integration</div>
     </div>


      



     </div>





     <div className="key-feature pt-2 d-flex align-items-center justify-content-around" >

         
          <div className="feature-points p-3" >
          <ul>
          <h3>Benefits</h3>

            <li>Get Enquiry details on single click</li>
            <li>Get Reports filtered on parameters</li>
            <li>Get Follow Up reminders</li>
            <li> Detailed Report & Comparative Analysis</li>
            <li>Increase the number of admissions</li>
          </ul>


          </div>




          <div className="feature-img" >
            <img src={img4} alt="" />
          </div>

       </div>



         <div className="questions">
           <h2 className='pt-5'>Frequently asked questions regarding Enquiry Management</h2>

           <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Q1. How to get enquiries from the website directly to School software?</Accordion.Header>
        <Accordion.Body>
        We will integrate the Enquiry form on your website to ERP, So data can directly be seen at one place, instead of managing the enquiries on emails.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Q2. How customisations can be done in fields of enquiry form?</Accordion.Header>
        <Accordion.Body>
        Our 24X7 Support team will quickly customise the same to match your requirement at no additional cost
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Q3. How School will get to know how many enquiries came via phone, school website, social media, etc?</Accordion.Header>
        <Accordion.Body>
        These types of reports are already available in our School ERP Management software solution. However, in case of any special requirement, Same can be customised
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
         </div>







       </div>
     </div>

       





    </div>




     <Footer/>



      </>
 
  )
}

export default ErpModule
