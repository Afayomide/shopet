import "./aboutus.css"
import sealpeople from "../../images/1.png"
import location from "../../images/3.png"
import customer from "../../images/6.png"
import delivery from "../../images/5.png"

function Aboutus() {
    return(
        <>
        <div className="first-section" id="aboutus">
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
             <div className="infoContainer">
             <div className="aboutinfo">
                <div className="infodiv bder-btm">
                <img src={delivery} alt="delivery package image"/>
                <div className="numNtext">
            <p className="num">10000</p>
                <p className="greytext">Fast Delivery</p>
                </div>
                </div>
        
                <div className="infodiv bder-btm">    
                <img src={customer} alt="customers image"/>
                <div className="numNtext">
                <p className="num">150+</p>
                <p className="greytext">Happy customers</p>
                </div>
                </div>

                <div className="infodiv">   
                 <img src={location} alt="Gps location image"/>
                 <div className="numNtext">
                <p className="num">100+</p> 
                <p className="greytext">Nationwide Reach</p></div>
                </div>
             </div>
             </div>

             <div className="reasons">
                <h4 className="chooseUs">
                    Why you should choose us?
                </h4>
                <ul>
                    <li><span className="head">Speed</span><br/>
                    Fastest air freight and logistics company
                    servicing Liberian communities. We deliver your cargo
                    between 3 to 7 days.
                    </li> 
                    <li><span className="head">Special Services For the Modern Retailer</span><br/>
                    We offer pocket-friendly rates for clients who ship item in bulk 
                    with us.
                    </li>
                    <li><span className="head" id="services">Advanced Tracking System</span><br/>
                    Shipment visibility and tracking coming soon.
                    </li>
                    <li>
                        <span className="head">Wider Reach</span><br/>
                        Improved customer offering with shipping options from Minnesota,
                         Dallas and Houston to Liberia. Other US States can reach out to us.
                    </li>
                </ul>
             </div>
        </>
    )
}

export default Aboutus