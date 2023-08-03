import shopetlogo from "../../images/shopetlogo-removebg.png"
import { useState } from "react"
import "./header.css"
import React from "react"
import { getValue } from "@testing-library/user-event/dist/utils"



function Header() {
  const block = "block"
  const none = "none"

 const [changeDisplay, displayChanger] =useState(none)
   
   const handleDisplay=() =>{
    Form()
    displayChanger(block)
  }

  const handleDisplayagain =() =>{
    displayChanger(none)
  } 

 const [showForm, formShower] = useState(true)

  const handleForm=() => { 
      formShower(!showForm)
     
  }
  
  const [name, updateName] = useState("")
  const [email, updateEmail] =useState("")
  const [number, updateNumber] = useState("")

  const [warning, setWarning] = useState("")
  const [warningDisplay, setWarningDisplay]= useState("none")

  const [fName , setFname] = useState("Full")
  const placeholder = `${fName} Name `

  const changeWarning = () =>{
    setWarningDisplay("block")
  }

function Form () {   
  const formDisplay={display: changeDisplay}

  const warningStyle={display: warningDisplay}
  const formSelect = {
    backgroundColor: "black"
  }
    return(
    <>

    <div style={formDisplay} className="form">
    
    <div className="form-content">
    
    <p className="back" onClick={handleDisplayagain}>X</p>
        <h3>
            Join Waitlist
        </h3>
        <p>
        Register to join our web app waitlist where
         you would be able 
        to manage and track your shipment service
        </p>
        <div className="warning">
        <p style={warningStyle}>Please enter your {warning}</p>
        </div>

        <div className="formName">
          <button onClick={(e)=>{
            e.preventDefault()
            setFname("Business")
          }}>Business</button> 
          <button onClick={(e)=>{
            e.preventDefault()
            setFname("Full")}}>Individual</button>
        </div>
    <form>
        <p>{fName} Name</p>
        
        <input name="name" placeholder={placeholder} value = {name} 
        onChange={(e)=>{
          updateName(e.target.value)}}/>
        
        <p>Phone Number</p>
        <input name="number" placeholder="phone Number" value={number} 
          onChange={(e) => {
            updateNumber(e.target.value)}}/>
  
        <p>Email Address</p>
        <input name="email" placeholder="Enter Email Address" value={email}
          onChange={(e) => {
            updateEmail(e.target.value)
          }}
        />

        <button type="submit" className="waiting-list" onClick={(e) =>{
          e.preventDefault()
          if(name === ""){
          console.log("name is empty")
          changeWarning()
          setWarning("name")
          }
           else  if(number === "") {
            console.log("number is empty")
            changeWarning()
          setWarning("number")
           }
           else if (email === "") {
            console.log("email is empty")
            changeWarning()
          setWarning("email")
           }
           else{
        console.log(name , email, number)
        setWarningDisplay("none")
        alert('We will contact you. Thank you for choosing Shipetal.');
        }
        }}>
        Join Waiting List</button>
        </form>
        </div>
        </div>
    </>
    )

  }
  
return(
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img className="shopet" src={shopetlogo}/></a>
  <button 
  onClick={(e)=>{
    e.preventDefault()
    handleDisplayagain()
  }}
  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" 
  aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link head-link" href="#aboutus">About Us <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link head-link" href="#services">Services <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link head-link" href="#pricing">Pricing <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link head-link" href="#location">Location <span className="sr-only">(current)</span></a>
      </li>

    </ul>
        <button onClick={() => {
          handleDisplay()
          handleForm()
        }} className="btn  bg-primary my-2 my-sm-0" type="submit">Join Waiting List</button>
          
  </div>
</nav>
{!showForm ? (<div>{Form()}</div>) : null}
</>
)

}
export default Header