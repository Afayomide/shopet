import "./aboutus.css"
import sealpeople from "../../images/seal.svg"
import location from "../../images/location.svg"
import customer from "../../images/customer.svg"
import delivery from "../../images/delivery.svg"

function Aboutus() {
    return(
        <>
        <div className="first-section">
        <div>
            <h2>Liberia Logistics simplified</h2>
            <p>We make shipping from USA to Liberia simple and fast<br/>
            Offering air freight at affordable prices.</p>
            <button className="first-button">LET'S GET STARTED</button>
            </div>
    
            <div>
             <img src={sealpeople} className="img-fluid" alt="sealaboutimage"/>
             </div>
             </div>
             <div className="aboutinfo">
                <div className="infodiv">
                <img src={delivery} alt="delivery package image"/>
                <div>
            <p className="font-weight-bold fs-5 ">10000</p>
                <p>Fast Delivery</p>
                </div>
                </div>
        
                <div className="infodiv">    
                <img src={customer} alt="customers image"/>
                <div>
                <p>150+</p>
                <p>Happy customers</p>
                </div>
                </div>

                <div className="infodiv">   
                 <img src={location} alt="Gps location image"/>
                 <div>
                <p>100+</p> 
                <p>Nationwide Reach</p></div>
                </div>
             </div>

             <div>
                <h4>
                    Why you should choose us?
                </h4>
                <ul>
                    <li><span>Speed</span><br/>
                    Fastest air freight and logistics company
                    servicing 9ja communities. We deliver your cargo
                    between 3 to 7 days.
                    </li> 
                    <li><span>Special Services For the Modern Retailer</span><br/>
                    We offer pocket-friendly rates for clients who ship item in bulk 
                    with us.
                    </li>
                    <li><span>Advanced Tracking System</span><br/>
                    Shipment visibility and tracking coming soon.
                    </li>
                    <li>
                        <span>Wider Reach</span><br/>
                        Improved customer offering with shipping options from Minneapolis,
                         Dallas and Houston to Nigeria. Other US States can reach out to us.
                    </li>
                </ul>
             </div>
        </>
    )
}

export default Aboutus