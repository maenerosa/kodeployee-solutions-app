import { useState, useRef, useEffect, useContext } from "react";
import EmployeeContext from "../features/EmployeeContext";
import employeeService from "../services/employeeService";

function AddEmployeeForm({
  setLoading,
  newPhoto,
  setNewPhoto,
}) {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newDOB, setNewDOB] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    fileInputRef.current.value = null;
  }, [fileInputRef]);

  const addEmployee = (e) => {
    e.preventDefault();

    setLoading(true);

    const newEmployeeData = new FormData();
    newEmployeeData.append("name", newName);
    newEmployeeData.append("number", newNumber);
    newEmployeeData.append("email", newEmail);
    newEmployeeData.append("gender", newGender);
    newEmployeeData.append("dob", newDOB);
    newEmployeeData.append("image", newPhoto);

    employeeService
      .createEmployee(newEmployeeData)
      .then((returnedEmployee) => {
        setEmployees([...employees].concat(returnedEmployee));
        fileInputRef.current.value = null;
        setNewName("");
        setNewNumber("");
        setNewEmail("");
        setNewGender("");
        setNewDOB("");

      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

  };

  return (
    <div className="fixed bottom-3 right-10 top-24 z-50">
      <form
        onSubmit={addEmployee}
        className="flex flex-col gap-4 p-4 border-solid border-2 border-slate-500  m-auto rounded-lg shadow-md"
      >
        <div className="flex flex-col">
          <label>Upload contact photo</label>
          <input
            className="border-solid border-2 border-slate-500 p-2 w-64"
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={(e) => setNewPhoto(e.target.files[0])}
          />
        </div>
        <div className="flex flex-col">
          <label>Name</label>
          <input
            className="flex items-center justify-between bg-white rounded-lg shadow-md w-64 p-2 mb-1"
            type="text"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
            placeholder="Enter Name"
          />
        </div>
       

        <div className="flex flex-col">
          <label>Phone Number</label>
          <input
            className="flex items-center justify-between bg-white rounded-lg shadow-md w-64 p-2 mb-2"
            type="tel"
            id="number"
            value={newNumber}
            onChange={(event) => setNewNumber(event.target.value)}
            placeholder="Enter phone number"
          />
        </div>

        <div className="flex flex-col">
          <label>Email</label>
          <input
            className="flex items-center justify-between bg-white rounded-lg shadow-md w-64 p-2 mb-2"
            type="email"
            value={newEmail}
            onChange={(event) => setNewEmail(event.target.value)}
            placeholder="Enter Email Address"
          />
        </div>

        <div className="flex flex-col">
          <label>Gender</label>

          <select
            className="flex flex-col"
            id="gender"
            name="gender"
            value={newGender}
            onChange={(event) => setNewGender(event.target.value)}
          >
            <option value=""> -Please Select- </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label>Birthday</label>
          <input
            className="flex items-center justify-between bg-white rounded-lg shadow-md w-96 p-2 mb-2"
            type="date"
            value={newDOB}
            onChange={(event) => setNewDOB(event.target.value)}
          />
        </div>

        <button
          className="bg-purple-500 hover:bg-purple-400 text-white font-bold w-24 py-2 px-3 border-b-4 border-purple-800 hover:border-purple-500 rounded"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddEmployeeForm;