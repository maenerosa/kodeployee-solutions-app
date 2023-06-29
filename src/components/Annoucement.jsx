import EmployeeBook from '../assets/EmployeeBook.svg'

function Annoucement() {
  return (
    <div 
    className='bg-gradient-to-tl from-[#9372b5] to-[#d749f4] fixed bottom-5 left-1/2 ml-80 mt-11 right-8 m-4 border w-[25%] h-1/2 rounded-xl'>
      <h1 className='text-white text-left mt-5 mb-8 ml-5 text-xl font-bold'>Annoucement</h1>
      <p className='text-white text-left ml-5 mt-5'>New Employee Handbook! <br/> Get your copy</p>
      <img src={EmployeeBook} alt='Book' className='w-48 h-72 object-cover absolute top-10 left-48 mt-11 ml-11'/>
      
    </div>
  )
}

export default Annoucement
