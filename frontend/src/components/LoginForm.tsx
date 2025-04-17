import { EventHandler } from "react";

function LoginForm()
{
   const handleSubmit = (event: React.FormEvent)=>{
      event.preventDefault();
      alert("Form Submitted");
   };

   return(
      <form
      onSubmit={handleSubmit}
      >
         <button
         type="submit"
         disabled
         >
            Login
         </button>
      </form>
   );
}

export default LoginForm;