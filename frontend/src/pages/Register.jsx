import { Link } from "react-router-dom/cjs/react-router-dom.min";
import InputLog from "../components/InputLog";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authSlice";


export default function Register() {

  // recuperation des informations utilisateurs
  const [formData, setFormData] = useState({
    'first_name':"",
    'last_name':"",
    'email':"",
    'password':"",
    're_password':"",
  })

  const {first_name, last_name, email, password, re_password} = formData

  const dispatch = useDispatch();

  const {user, isLoading, isError, isSuccess, message }=useSelector((state)=>state.auth)

  const history = useHistory()
  
  // function


    // Fonction pour gérer la soumission du formulaire

    const handleChange = (e) => {
      setFormData((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
      // console.log(formData);
      
    }

    const handleSubmit = async (e) => {
      e.preventDefault(); // Empêche le rechargement de la page par défaut

      if(password != re_password){
        console.log("passwords do not match");
        toast.error("Passwords do not match")
      }else{
        const userData = {
          first_name, 
          last_name, 
          email, 
          password, 
          re_password
        }
        dispatch(register(userData))
      }
    };

    useEffect(()=>{
      if(isError){
        toast.error(message)
      }

      if(isSuccess || user){
        history.push("/")
        toast.success("An activation email has been sent to your email. please check your email")
      }
    })
  

  return (
    <div className="flex h-screen justify-center items-center bg-slate-200" >
      <div className="shadow-md bg-white rounded py-14 px-8">
        {/* Title Login Page */}
        <h1 className="text-2xl font-medium text-center pb-12">Register For Auth App</h1>
        {/* Formulaire */}
        <form action="#" onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4 flex flex-col">
            <InputLog type="text" place="First Name" name="first_name"  valeur={first_name} handleChange={handleChange} />
            <InputLog type="text" place="Last Name" name="last_name" valeur={last_name} handleChange={handleChange} />
            <InputLog type="email" place="Email" name="email" valeur={email} handleChange={handleChange} />
            <InputLog type="password" place="Password" name="password" valeur={password} handleChange={handleChange} />
            <InputLog type="password" place="Retype password" name="re_password" valeur={re_password} handleChange={handleChange} />
            <button 
            // {email? disabled={false}: disabled={false} } 
              className="bg-blue-600 h-10 hover:bg-blue-700 text-white rounded font-medium"
            >Register</button>
          </div>
          <p>
            <Link to="/" className="text-blue-950 active:text-rose-500" >Already registered ? Please Login !</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
// Reset Your Passwod