import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MdLogout, MdDashboard, MdPerson3, MdSpeakerNotes } from "react-icons/md";

function Sidebar() {
  return (
    <div className="bg-[#FAF7F7] text-black h-screen w-40 fixed top-0 left-0  z-50 shadow-md' flex flex-col">
      <img
        src={Logo}
        alt="Logo"
        className="logo object-scale-down h-20  w-40 top-0"
      />
      <nav className="flex-grow">
        <ul >
        <li className="p-2 text-center hover:bg-purple-700 ">
      <Link to="/dashboard" className="text-black-500">
        <div className="text-purple-700 text-l hover:text-white ml-2">
          <MdDashboard className="inline-block mr-2" />
          Dashboard
        </div>
      </Link>
    </li>
          <li className="p-2 text-center hover:bg-purple-700 ">
            <Link to="/employee" className="text-black-500">
            <div className="text-purple-700 text-l hover:text-white">
          <MdPerson3 className="inline-block mr-2" />
          Employee
        </div>
            </Link>
          </li>
          <li className="p-2 text-center hover:bg-purple-700 ">
            <Link to="/leave" className="text-black-500">
            <div className="text-purple-700 text-l hover:text-white mr-8">
          <MdSpeakerNotes className="inline-block mr-2" />
          Leave
        </div>
            </Link>
          </li>
        </ul>
      </nav>
      <footer className="p-6 text-black ">
        <Link to="/logout" className="flex items-center pb-5">
          <div className=" text-purple-700">
          <MdLogout className="inline-block mr-2 " />
         Logout
          </div>
          
        </Link>
        <p className="text-xs">© 2023 Kodeployee</p>
      </footer>
    </div>
  );
}

export default Sidebar;
