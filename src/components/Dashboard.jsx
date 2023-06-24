import Attendance from './Attendance'
import {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import Navbar from './Navbar';
import EmployeesLeaveBoard from './EmployeesLeaveBoard'
import TotalEmployees from './TotalEmployees'
import Sidebar from './Sidebar';


function Dashboard() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <div>
      <TotalEmployees />
      <Attendance />
      <div className='fixed top-28 left-[32.5%] ml-96'>
      <Calendar 
      value={dateState}
      onChange={changeDate}
      className={"bg-[#FAF7F7] rounded-xl px-4 py-4 h-72 w-1/2 text-black-light font-light text-l"}
      />
      <p> Today is <b className='text-purple-600'>{moment(dateState).format('MMMM Do YYYY')}</b></p>
      </div>
      <Sidebar />
      <Navbar />
      <EmployeesLeaveBoard />
      
    </div>
  )
};

export default Dashboard
