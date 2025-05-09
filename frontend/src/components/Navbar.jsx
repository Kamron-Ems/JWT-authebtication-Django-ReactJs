// import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'

function Navbar(props) {

  const {content} = props
  // const history = useHistory()

  // Function

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     history.push("/"); // Redirection vers login si pas de token
  //     return;
  //   }
  // },[])
    
  return (
    <>
    {/* Horizontal Navigations */}
      <div className='h-14 w-full pl-4 shadow-md bg-blue-600 text-white font-semibold content-center'>
        DTL authentication
      </div>    
        {/* Vrtical Navigation  */}
      <div className='flex'>
        <div className='h-screen w-52 text-zinc-800 border shadow'>
          <ul className='space-y-3 p-4'>
            <Link to={"/home"} ><li>Menu</li></Link> 
            <Link to={"/home"} ><li>Home</li></Link> 
            <Link to={"/about"} ><li>About</li></Link> 
            {/* <Link to={""} ><li>Login</li></Link>  */}
            {/* <Link to={"/"} ><li>Setting</li></Link>  */}
          </ul>
        </div>   
          {/* main content  */}
        <div className=' p-3 w-full overflow-y-scroll h-screen pb-20'>{content}</div>
      </div>      
    </>
  )
}

export default Navbar
