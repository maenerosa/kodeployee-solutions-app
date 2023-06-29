import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { useContext } from "react";
import UserContext from "../features/UserContext";

function Navbar() {
  const location = useLocation();
  const { _, setUser } = useContext(UserContext);
  const handleLogout = () => {
    window.localStorage.removeItem("loggedEmployeeRecordsUser");
    setUser(null);
  };

  return (
    <div className="flex items-center justify h-20 bg-[#b6c1e2] p-4  text-gray-800  font-semibold text-xl  fixed top-0 left-0 right-0 z-00 shadow-md shadow-purple-500">
      <img
        src={Logo}
        alt="Logo"
        className="logo object-scale-down h-20  w-40 top-0"
      />
      <nav className="flex flex-col justify-center items-center ml-10">
        <ul className="flex justify-between items-center gap-3 text-sm ml-96">
        <li
            className={`p-2 text-center ${
              location.pathname === '/' ? 'bg-purple-700 text-white' : 'hover:bg-purple-700'
            }`}
          >
            <Link to="/" className="text-black-500">
              Dashboard
            </Link>
          </li>
          <li
            className={`p-2 text-center ${
              location.pathname === '/employee' ? 'bg-purple-700 text-white ' : 'hover:bg-purple-700' 
            }`}
          >
            <Link to="/employee" className="text-black-500 mr-2">
              Employee
            </Link>
          </li>
          <li
            className={`p-2 text-center ${
              location.pathname === '/leave' ? 'bg-purple-700 text-white' : 'hover:bg-purple-700'
            }`}
          >
            <Link to="/leave" className="text-black-500 mr-9">
              Leave
            </Link>
          </li>
        </ul>
      </nav>
    
        <div className="absolute bottom-3 right-10 top-6">
          <MdLogout className="text-sm mb-0" />
          <button onClick={handleLogout} className="text-xs mt-0">
          Logout
          </button>
        </div>
   
    </div>
  );
}

export default Navbar;