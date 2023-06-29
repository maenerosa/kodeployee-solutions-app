import WelcomeImage from '../assets/Welcome.svg'
import { useContext } from "react";
import UserContext from "../features/UserContext";

function Welcome() {
  const { user, _setUser } = useContext(UserContext);
  return (
    <div 
    className='bg-gradient-to-tl from-[#9372b5] to-[#d749f4] absolute -fixed top-24 left-64 w-1/4 h-64 mt-4 border border-gray-300 rounded-xl '>
      <img src={WelcomeImage} alt='Welcome' className='w-full h-full object-cover object-center absolute mix-blend-overlay rounded-xl'/>
      <h1 className='text-white text-left ml-3 mb-5 mt-5'>Welcome back {user?.name}!</h1>
      <p className='text-white text-left ml-3 mr-3 mb-3'>We are delighted to have you on board and <br/> provide you with this powerful tool to streamline your <br/> HR-related tasks.</p>
    </div>
  )
}

export default Welcome
