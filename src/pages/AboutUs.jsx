import React from 'react'
import { Footer } from '../Components/Footer'
import NavB from '../Components/NavB'
import { TopHeader } from '../Components/TopHeader'
import "../Styles/Aboutus.css"

export const Aboutus = () => {
  return (
    <>
        <TopHeader/>
        <NavB/>
       
       <div className="container-fluid about" >
         <h1  data-aos="fade-up"
     data-aos-duration="2000">About us</h1>
       </div>


        
        <div className="container-fluid who-we-are" >

         <h3 className=' heading' data-aos="fade-up"
     data-aos-duration="2000">Who we are?</h3>

         <p className=' para' data-aos="fade-up"
     data-aos-duration="2000">Corvids Technology Pvt. Ltd. proudly presents a cutting-edge solution that is revolutionizing the educational landscape in India. In this digital era, where convenience and efficiency are paramount, our School Management ERP System, in conjunction with a comprehensive mobile application, is setting new standards in the field of education. We are your go-to destination for the finest School ERP Software in India, designed to simplify and streamline the daily administrative processes for educational institutions.
     At Corvids Technology Pvt. Ltd., we understand the pivotal role that technology plays in modern education. Our Cloud-Based School ERP Software Solution is a comprehensive platform that encompasses a multitude of functionalities, all aimed at enhancing the educational experience. It is more than just software; it's a transformation that takes schooling to the next level.
     </p>
         
         <div class="custom-shape-divider-bottom-1698066035">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>

        </div>






            
        <div className="container-fluid core-value" >

         <h3 data-aos="fade-up"
     data-aos-duration="2000">Core value</h3>

         <p data-aos="fade-up"
     data-aos-duration="2000">At Corvids Technology Pvt. Ltd., we hold "Innovation Excellence" as a core value that guides our actions, decisions, and interactions. We are committed to fostering a culture of innovation that is deeply ingrained in our DNA, and we believe in its power to drive progress and transformation in the digital age.We ensure to build the transparency in all our policies and day to day dealings. We have always believed in inspiring the mass with our approach of professionalism.</p>
         
      

        </div>



           
        <div className="container-fluid our-vision" >

         <h3 data-aos="fade-up"
     data-aos-duration="2000">Our vision</h3>

         <p data-aos="fade-up"
     data-aos-duration="2000">At Corvids Technology Pvt. Ltd., we envision a future where technology transcends boundaries, enriching lives and transforming industries. Our mission is to be at the forefront of this transformative journey, leading with innovation, integrity, and unwavering commitment.

We aspire to be a global leader in cutting-edge technological solutions, setting new standards for excellence in every domain we touch. Our vision is to empower individuals, organizations, and communities to thrive in the digital age, fostering progress, knowledge, and prosperity.
We see a world where our solutions enable seamless connectivity, foster sustainable practices, and enhance the quality of life. Through our continuous pursuit of innovation, we aim to shape the future of technology, making it accessible, reliable, and transformative.
Corvids Technology Pvt. Ltd. envisions a future where technology is a force for good, where it breaks down barriers and fuels progress. We are dedicated to being the catalyst that drives this vision forward, and we invite everyone to join us on this extraordinary journey towards a brighter, more connected, and technologically advanced world.</p>
         
         <div class="custom-shape-divider-bottom-1698068953">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" class="shape-fill"></path>
    </svg>
</div>
         

        </div>



        <Footer/>
    </>
  )
}
