import { Link } from 'react-router-dom/cjs/react-router-dom'

function ActivateAccount() {
  return (
    <div className='bg-slate-200 relative'>
      <h1 className='text-center absolute top-20 right-1/3 left-1/3  text-5xl font-semibold '>Activate Account</h1>
      <div className="flex flex-col space-y-36 h-screen justify-center items-center bg-slate-200">
        <Link to = "#" className="shadow-md bg-white rounded text-xl hover:bg-zinc-700 hover:text-white font-lightt- py-4 px-8" > Activate Account</Link>      
      </div>
    </div>
  )
}

export default ActivateAccount
