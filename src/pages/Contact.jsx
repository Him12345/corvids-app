import React from 'react'
import { Footer } from '../Components/Footer'
import NavB from '../Components/NavB'
import { TopHeader } from '../Components/TopHeader'
import "../Styles/Contact.css"
import Button2 from '../Components/Button2'

export const Contact = () => {

    const submitHandler=(e)=>{
      e.preventDefault();
      
    }
  return (

    <>
    <TopHeader/>
    <NavB/>
   
      <div className="container-fluid mt-2 mb-2 d-flex justify-content-center align-items-center p-md-5">

         <div className="form-wrapper">

         <form onSubmit={submitHandler}  className='d-flex  justify-content-center  flex-column'>
         {/* <h1><span style={{color:"#4FB1B0"}}>Cont</span><span style={{color:"#BDB16E"}}>act</span>  <span style={{color:"#F7B262"}}>Us</span></h1> */}
          <h1 style={{color:"#5db9ac"}}>Contact us</h1>
          <input type="text"  placeholder="Your name" />
          <input type="text"  placeholder="Your School's name" />
          <input type="text"  placeholder="Your School's Address" />
          <input type="email"  placeholder="Your email address" />
          <input type="number"  placeholder="Your phone number" />
          <input type="number"  placeholder="No of Student" />
          <textarea name="message" id="" cols="30" rows="5" placeholder='Write your message'></textarea>
          

        <Button2 name="Send"/>




      </form>

         </div>
       
      </div>
   <Footer/>


    </>
   




  )
}
