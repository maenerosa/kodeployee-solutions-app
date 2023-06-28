import "./App.css";
import { useState, useEffect } from "react";
import EmployeeContext from "./features/EmployeeContext";
import LoadingContext from "./features/LoadingContext";
import employeeService from "./services/employeeService";
import RouteSwitch from "./RouteSwitch";
import UserContext from "./features/UserContext";

function App() {
  const [user, setUser] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(
      "loggedEmployeeRecordsUser"
    );

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      employeeService.setToken(user.token);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 p-4">
      <EmployeeContext.Provider value={{ employees, setEmployees }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          <UserContext.Provider value={{ user, setUser }}>
            <RouteSwitch />
          </UserContext.Provider>
        </LoadingContext.Provider>
      </EmployeeContext.Provider>
    </div>
  );
}

export default App;
