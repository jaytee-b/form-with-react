// import React, { useState } from "react";

// const Form = () => {
//   const [emailState, setEmailState] = useState("");
//   const [passwordState, setPasswordState] = useState("");
//   const submitForm = (e) =>{
//     e.preventDefault()
//         const formData = {emailState,passwordState}
//         console.log(formData);

//   }
//   return (
//     <>
//       <div>
//         <form 
//          onSubmit={submitForm} 
//         className="border rounded bg-slate-100 w-[400px] p-2" action="">
//           <div className="flex flex-col items-start">
//             <label>email address:</label>
//             <input
//             value={emailState}
//             onChange={(e)=>setEmailState(e.target.value)}
//               className="w-full"
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Please enter your email address"
//             />
//             <br />
//             <label>Password:</label>
//             <input
//             value={passwordState}
//             onChange={(e) => setPasswordState(e.target.value)}
//               className="w-full"
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Please enter your password"
//             />
//             <button className="bg-black text-white px-[20px] w-full hover:bg-slate-400">
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Form;
