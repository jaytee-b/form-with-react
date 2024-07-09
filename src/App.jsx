// // step1: import the use state hook from react
// // import { useState } from 'react'
// import React from 'react'
// import States from './components/States';

// const App = () => {
//    //Step2: create state variables and a function
//   // const [nameState, setNameState]= useState("Bolu");
//   // const [jobTitleState, setJobTitleState]= useState("an upcoming artiste");
//   // const [locationState, setLocationState]= useState("I came from the gutters")
//   // const meetApostle = ()=>{
//   //   setNameState("Bolu cello");
//   //   setJobTitleState("a Super star");
//   //   setLocationState("I now live in London")

//   return (
//     <>
//     <div>hi</div>
//     <States/>
//     </>
//   )
//   }
 
  
//   export default App

  import React from 'react'
import States from './components/States'
// import Form from './components/Form'
import Register from './components/Register'
  
  const App = () => {
    return (
      <div>
        <States/>
        {/* <Form/> */}
        <Register/>
        
      </div>
    )
  }
  
  export default App
  








