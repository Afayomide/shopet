import shopetlogo from "../../images/shopetlogo-removebg.png"
import { useState } from "react"
import "./header.css"

function Header() {

  function Form () {
    const formDisplay={display: "none"}
    return(
    <>
    <div style={formDisplay} className="form">
        <h3>
            Join Waitlist
        </h3>
        <p>
        Register to join our web app waitlist where
         you would be able 
        to manage and track your shipment service
        </p>
        <p>Customer Type</p>
  
        <p>Company Name</p>
        <input placeholder="Name"/>
        
        <p>Phone Number</p>
        <input placeholder="phone Number"/>
  
        <p>Email Address</p>
        <input placeholder="Enter Email Address"/>
        </div>
    </>
    )
  }
  const [showForm, formShower] = useState(true)

  const handleForm=() => {
      formShower(!showForm)
  }
    return(
        <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img className="shopet" src={shopetlogo}/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#aboutus">About Us <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#services">Services <span class="sr-only">(current)</span></a>
      </li>
    </ul>
          <button onClick={handleForm} class="btn  bg-primary my-2 my-sm-0" type="submit">Join Waiting List</button>
          
  </div>
</nav>
{showForm ? (<div>{Form()}</div>) : null}
</>
)

}
export default Header