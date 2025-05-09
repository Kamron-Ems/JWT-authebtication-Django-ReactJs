// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import InputLog from "../components/InputLog";
import { useState } from "react";
import {useHistory} from 'react-router-dom'

export default function ResetPassword() {
  // State
  // const [logemail, setLogEmail] = useState("")
  // const [logpassword, setLogPassword] = useState("")
  const [resetPassData, setResetPassData] = useState({
    'email':"",
  })

  const {email} = resetPassData

  const handleChange = (e) => {
    setResetPassData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
    // console.log(formData);
    
  }

  const history = useHistory()
  // Function
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut
    history.push("/home")
  };

  return (
    <div className="flex h-screen justify-center items-center bg-slate-200" >
      <div className="shadow-md bg-white rounded py-14 px-8">
        {/* Title Login Page */}
        <h1 className="text-2xl font-medium text-center pb-8">Reset Password</h1>
        {/* Formulaire */}
        <form action="#" onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-5 flex flex-col">
            <InputLog type="email" place="Email" valeur={email} name="email" handleChange={handleChange} />
            {/* <InputLog type="password" place="Password" valeur={password} name="password" handleChange={handleChange} /> */}
            <button 
              className="bg-blue-600 h-10 hover:bg-blue-700 text-white rounded font-medium"
            >Reset Your Password</button>
          </div>
          {/* <p> */}
            {/* <Link to="/register" className="text-blue-950 active:text-rose-500" >No accounte yet ? Please Register !</Link> */}
          {/* </p> */}
        </form>
      </div>
    </div>
  )
}
