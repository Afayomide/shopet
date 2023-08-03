import Map from "../../images/mapjpeg.jpeg"
import Whatsapp from "../../images/whatsapp.png";

import "./location.css"

function Location () {
    return(
        <>

            <div  className="map">
            <div className="services reasons">
            <h3 className="chooseUs">
                Location
            </h3>
            <p>
            We can be found in your city or online.
            <br/>
            Possibilty in every direction
            </p>
            </div>
            <div className="">
            <div className="mapcard">
            <a href="https://maps.apple.com/?address=3300%20CR-10%20W,%20Mi
            nneapolis,%20MN%20%2055429,%20United%20States&ll=45.060907,-93.323961&q=330
            0%20CR-10%20W&_ext=EiYp5SCNoDiHRkAxPmcH9CNVV8A5Y/ay/F6IRkBBaLFzllNUV8BQAw%3D%3D&t=m"> 
            <img className="mapImage" src={Map} alt="map location"/> 
            
                <p>3300 County road 10 suite 206
Brooklyn centre
Minnesota 55429 </p>
<p className="direction">VIEW DIRECTION</p>
</a>
<a href="tel:+1952-607-0580"><p className="number"><img src={Whatsapp}/>+1952-607-0580</p></a>

</div>
            </div>
            </div>
        </>
    )
}

export default Location