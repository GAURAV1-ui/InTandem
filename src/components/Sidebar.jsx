import { useState } from "react";
import { RxHamburgerMenu,RxCross2  } from "react-icons/rx";
import { CiChat1 } from "react-icons/ci";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="min-h-screen">
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={toggleSidebar}
      >
        <RxHamburgerMenu className="text-gray-900 px-2 rounded-sm"/>
      </span>
      <div
        className={`sidebar fixed top-0 bottom-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 lg:left-0 ${
          isSidebarOpen ? "block" : "hidden lg:block"
        }`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              InTandem
            </h1>
            <RxCross2 className="text-white cursor-pointer ml-28 lg:hidden" onClick={toggleSidebar}/>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>

        <div 
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" 
            onClick={toggleSidebar}>
          <CiChat1/>
          <span className="text-[15px] ml-4 text-gray-200 font-bold" >Chat</span>
        </div>
      </div>
    </div>
  );
}
