import Navbar from "../components/Navbar";
import ComingSoon from "../assets/ComingSoon.svg"

function Leave() {
  return (
    <div
    className='bg-gradient-to-tl from-[#9372b5] to-[#d749f4] absolute -fixed top-64 left-1/4 w-1/2 h-1/2 mt-4 border border-gray-300 rounded-xl'>
      <img src={ComingSoon} alt='Leave' className='w-full h-full object-cover object-bottom absolute mix-blend-overlay rounded-xl'/>
      <Navbar />
    </div>
  )
}

export default Leave
