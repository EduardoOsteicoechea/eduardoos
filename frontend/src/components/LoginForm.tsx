import React from "react";
import "./LoginForm.css";

function LoginForm001()
{
   const [email, setEmail] = React.useState("");
   const [password, setPassword] = React.useState("");
   const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = React.useState(true);

   const handleSubmit = (event: React.FormEvent) =>
   {
      event.preventDefault();
      const formData :FormData = new FormData();
      formData.append("email",email);
      formData.append("password",password);

      console.log("Form Data Entries:");
      
      for (const entry of formData.entries()) {
        console.log(entry[0], entry[1]); // key, value
      }

      alert("Form Submitted");
   };

   const handleEmailInput = (event:any) =>
   {
      setEmail(event.target.value);
   };

   const handlePasswordInput = (event:any) =>
   {
      setPassword(event.target.value);
   };

   React.useEffect(()=>{
      setSubmitButtonIsDisabled((email === "" || password === ""));
   },[email,password])

   return (
      <form
      onSubmit={handleSubmit}
      className="LoginForm001"
      >
         <h1
         className="LoginForm001Heading"
         >
            Log In
         </h1>

         <label
         htmlFor="LoginForm001EmailInput"
         className="LoginForm001EmailInputLabel"
         >
            Email
         </label>
         
         <input
         id="LoginForm001EmailInput"
         className="LoginForm001EmailInput"
         type="email"
         value={email}
         onChange={handleEmailInput}
         />


         <label
         htmlFor="LoginForm001PasswordInput"
         className="LoginForm001PasswordInputLabel"
         >
            Password
         </label>

         <input
         id="LoginForm001PasswordInput"
         className="LoginForm001PasswordInput"
         type="password"
         value={password}
         onChange={handlePasswordInput}
         />


         <button
         type="submit"
         className="LoginForm001SubmitButton"
         disabled={submitButtonIsDisabled}
         >
            Login
         </button>
      </form>
   );
}

export default LoginForm001;