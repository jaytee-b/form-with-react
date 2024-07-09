import React, { useState } from "react";



const Register = () => {
    const[firstNameState,setFirstNameState]=useState("");
    const[lastNameState,setLastNameState]=useState("");
    const[emailAddressState,setEmailAddressState]=useState("");
    const[phoneNumberState,setPhoneNumberState]=useState("")
    const sumbitNewForm =(e)=>{
        e.preventDefault()
        const formData = {firstNameState,lastNameState,emailAddressState,phoneNumberState}
        console.log(formData);
    }
  return (
    <>
      <div>
        <h1>Register here</h1>
      </div>
      <div>
       
        <form
        onSubmit={sumbitNewForm}
        
        action="">
          <div
           className="flex flex-col bg-black px-4 py-[40px] text-white w-[400px]">
            <label htmlFor="">First name:</label>
            <input
            value={firstNameState}
            onChange={(e)=>setFirstNameState(e.target.value)}
              type="text"
              id="firstname"
              name="firstname"
              placeholder="enter your firstname"
            />
            <label htmlFor="">Last name:</label>
            <input
            value={lastNameState}
            onChange={(e)=>setLastNameState(e.target.value)}
              type="text"
              id="lastname"
              name="lastname"
              placeholder="enter your lastname"
            />
            
            <label htmlFor="">Email address:</label>
            <input
            value={emailAddressState}
            onChange={(e)=>setEmailAddressState(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="enter your email address"
            />

            <label htmlFor="">Phone number:</label>
            <input
            value={phoneNumberState}
            onChange={(e)=>setPhoneNumberState(e.target.value)}
              type="number"
              id="phonenumber"
              name="phonenumber"
              placeholder="(123) 455 4555 555"
              
            />

            <button
            className=" text-white bg-lime-800 hover:bg-lime-300">
                Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
