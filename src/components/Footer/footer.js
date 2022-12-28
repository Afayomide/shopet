import "./footer.css"
import shopetlogo from "../../images/shopetlogo-removebg.png"
import Linkedin from "../../images/linkedin.png";
import Instagram from  "../../images/instagram.png";
import Whatsapp from "../../images/whatsapp.png";
import Twitter from "../../images/twitterLogo.png";

function Footer(){
    return(
        <>
        <footer>
        <div>
       <img   className="shopetimage" src={shopetlogo} alt="shopetLogo"/>
         <br/>
         <span className="head">Follow Us On</span><br/>
        <div className="icons"> 
       <a href="http://instagram.com/shiptetal"><img src={Instagram} alt="instagram Icon"/></a><br/>
       <a href="https://wa.link/5d6r6z"> <img src={Whatsapp} alt="Whatsapp Icon"/></a><br/>
       <a href= "https://twitter.com/shiptetal?t=iaMQYu2PRMpTRTpLq_v48w&s=09"><img src={Twitter} alt="Twitter Icon"/></a><br/>
       </div>
       </div>

       <div>

       <ul className="footerLI">
        <a href="#aboutus"><li>About Us</li></a>
        <a href="services"><li>Services</li></a>
       </ul>
       </div>

       <div>
       
        <ul>
         <span className="head">Reach us At</span><br/>
            <a href="mailto:Shiptetal.llc@gmail.com">Shiptetal.llc@gmail.com</a>
            <br/>
            <a href="tel:+1952-607-0580">+1952-607-0580</a>
        </ul>
       </div>


       
       </footer>
      <div className="LastSection">
        <p>© SEAL 2022. All Rights Reserved
</p>
       <p>Terms and Conditions / Privacy Policy</p>
       </div>

        </>
    )
}

export default Footer