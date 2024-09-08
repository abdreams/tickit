/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import { useLocation } from "react-router-dom";

import routes from "routes.js";
import routesForEmp from "routesForEmp.js";
import routesForAdmin from "routesForAdmin";
import routesForProj from "routesForProj.js";
import routesForTask from "routesForTask.js";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = ({ open, onClose }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const {isAuthenticated,logout} = useAuth0();
  console.log("side bar is authenticated",isAuthenticated)

  // Determine which routes to pass based on the current path for admin or emp
  const routesToPass = currentPath.startsWith("/admin")
    ? routesForAdmin
    : currentPath.startsWith("/emp")
    ? routesForEmp.filter((route) => !route.hidden) // Filter out hidden routes
    : currentPath.startsWith("/project")
    ? routesForProj.filter((route) => !route.hidden) // Filter out hidden routes
    : currentPath.startsWith("/task")
    ? routesForTask.filter((route) => !route.hidden) // Filter out hidden routes
    :routes;

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="ml-1 mt-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          Tick <span className="font-medium">IT</span>
        </div>
      </div>
      <div className="mb-7 mt-[58px] h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        
        <Links routes={routesToPass} />
       
      </ul>
      {
          isAuthenticated && 
        <button onClick={()=> logout({returnTo:window.location.origin})}>Logout</button>
        }

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
