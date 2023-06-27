import { useState, useContext } from "react";
import EmployeeContext from "../features/EmployeeContext";


function TotalEmployees() {
  const {employees} = useContext(EmployeeContext);
  const [totalEmployees, setTotalEmployees] = useState(0);
  
  return (
    <div className= "fixed top-24 left-52 w-1/5 h-72 mt-4 border border-gray-300 rounded-xl bg-[#FAF7F7] flex justify-center items-center space-y-96 space-x-96">
      <h1 className="text-lg font-semibold text-[#2D2D2D] pt-0">Total Employees {employees.reduce(
                  (totalEmployees, employee) => totalEmployees + employee.quantity,
                  0
                )}</h1>
    </div>
  )
}

export default TotalEmployees
