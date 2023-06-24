import { useEffect, useContext } from "react";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import EmployeeContext from "../features/EmployeeContext";
import employeeService from "../services/employeeService";

function EmployeeList({ setLoading, setEditEmployee }) {
  const { employees, setEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    employeeService
      .getEmployees()
      .then((response) => {
        setEmployees(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const editEmployee = (employee) => {
    setEditEmployee(employee);
  };

  const deleteEmployee = (id) => {
    setLoading(true);
    employeeService
      .deleteEmployee(id)
      .then((_response) => {
        setEmployees(employees.filter((person) => employee.id !== id));
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  return (
    <ul className=" grid grid-cols-3 items-center border-2 border-white rounded-lg w-1/2 mx-20 my-10 mt-10 p-4 text-white shadow-lg shadow-purple-400/50">
      {employees.map((employee) => (
        <li key={employee.id} className="grid grid-rows-4 grid-flow-col h-52 w-52 file:justify-between text-xs text-purple-700 border border-gray-300 rounded-lg">
          <div className="p-2">
            <img
              src={employee.photoInfo.url}
              alt="Contact photo"
              className="w-10 mb-2"
            />
            <div className="">
              <p className="font-semibold">{employee.name}</p>
              <p className="text-gray-400">{employee.number}</p>
              <p className="text-gray-400">{employee.email}</p>
              <p className="text-gray-400">{employee.gender}</p>
              <p className="text-gray-400">{employee.dob}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 justify items-center mt-2 ml-32">
          <FaUserEdit
              className="hover: cursor-pointer"
              onClick={() => editEmployee(employee)}
            />
            <FaTrashAlt
              className="hover: cursor-pointer"
              onClick={() => deleteEmployee(employee.id)}
            />
        </div>
        </li>
      ))}
    </ul>
  );
      }

export default EmployeeList;
