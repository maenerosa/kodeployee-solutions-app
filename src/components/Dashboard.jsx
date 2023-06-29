import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import EmployeesLeaveBoard from "./EmployeesLeaveBoard";
import TotalEmployees from "./TotalEmployees";
import UserContext from "../features/UserContext";
import Welcome from "./Welcome";
import CompanyNews from "./CompanyNews";
import Annoucement from "./Annoucement";


function Dashboard() {
  const { user, setUser } = useContext(UserContext);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="">
      <Welcome />
      <TotalEmployees />  
      <Navbar />
      <EmployeesLeaveBoard />
      <CompanyNews />
      <Annoucement />
     
    </div>
  );
}

export default Dashboard;
