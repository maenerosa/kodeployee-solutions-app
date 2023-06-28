import { useEffect, useContext } from "react";
import EmployeeContext from "../features/EmployeeContext";
import employeeService from "../services/employeeService";

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
    <div className="fixed top-24 left-52 w-1/5 h-72 mt-4 border border-gray-300 rounded-xl bg-[#FAF7F7] flex justify-center items-center space-y-96 space-x-96">
      <h1 className="text-xl  items-center ">
        Total Employees{" "}
        <p className="emp-count text-5xl font-bold">{employees.length}</p>
      </h1>
    </div>
  );
}

export default TotalEmployees;