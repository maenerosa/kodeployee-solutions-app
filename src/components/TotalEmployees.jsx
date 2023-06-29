import { useEffect, useContext } from "react";
import EmployeeContext from "../features/EmployeeContext";
import employeeService from "../services/employeeService";
import EmployeeImage from '../assets/Employees.svg'

function TotalEmployees() {
  const { employees, setEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    employeeService
      .getEmployees()
      .then((response) => {
        setEmployees(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='bg-gradient-to-tl from-[#9372b5] to-[#d749f4] absolute -fixed top-24 left-96 ml-96 w-1/4 h-64 mt-4 border border-gray-300 rounded-xl'>
      <img src={EmployeeImage} alt='Employee' className='w-full h-full object-cover object-center absolute mix-blend-overlay rounded-xl'/>'
      <h1 className="text-xl  items-left text-white font-bold ml-5 ">
        Total Employees{" "}
        <p className="emp-count text-5xl font-bold">{employees.length}</p>
      </h1>
    </div>
  );
}

export default TotalEmployees;