import image01 from "../assets/image01.svg";
import image02 from "../assets/image02.svg";
import LeaveImage from '../assets/Leave.svg'

function EmployeesLeaveBoard() {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      photoUrl: "image02.svg",
      onLeave: true,
    },
    {
      id: 2,
      name: "Jay Tanner",
      photoUrl: "image01.svg",
      onLeave: false,
    },
  ];

  return (
    <div className='bg-gradient-to-tl from-[#9372b5] to-[#d749f4] absolute -fixed top-24 left-1/2 ml-80 w-1/4 h-64 mt-4 border border-gray-300 rounded-xl'>
        <img src={LeaveImage} alt='Employee' className='w-full h-full object-cover object-center absolute mix-blend-overlay rounded-xl'/>
      <h1 className="text-white text-left text-xl font-bold mt-5 ml-5 mb-3">Employee Leave Board</h1>
      <div className="employee-list">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className={`employee-card ${employee.onLeave ? "on-leave" : ""}`}
          >
            <img src={image02} alt={employee.name} className="ml-4 w-10 h-10" />
            <p className="text-white text-left text-l ml-5">{employee.name}</p>
            {employee.onLeave && <span className="text-black text-left text-l ml-5">On Leave</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeesLeaveBoard;
