import { useState, useEffect } from "react";
import moment from "moment";

function Clock() {
    const [time, setTime] = useState("");
  
    useEffect(() => {
      setInterval(() => {
       
        setTime(moment().format("hh:mm:ss A"));
      }, 1000);
    });
  
    return (
      <div className="absolute top-6 right-0 left-72">
        <div>
          <h1 className=" text-[#800FF0] text-xs leading-tight ">{time}</h1>
          <h2 className=" text-[#800FF0] text-xs leading-tight ">{moment().format("MMMM D, YYYY")}</h2>  
        </div>
   
      </div>
    );
  }

export default Clock