import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";
import AllProjectsSidebar from "./AllProjectsSidebar";
import { useAppDispatch, useAppSelector } from "@/redux/fetures/hooks";
import { logout, selectCurrentUser } from "@/redux/fetures/auth/authSlice";
import { Button } from "../ui/button";

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <aside className="col-span-2 h-screen  sticky top-0 left-0 overflow-auto px-1 flex flex-col justify-between pb-5">
      <nav className="flex flex-col pt-3 gap-2">
        <NavLink
          className="p-3  flex items-center gap-1 bg-gray-900 text-white rounded-md hover:bg-sky-950"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard/dashboard-home"
          className={({ isActive }) =>
            cn(
              "p-3 flex items-center gap-1 bg-gray-900 text-white rounded-md hover:bg-sky-950",
              {
                "bg-sky-950": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <AllProjectsSidebar />
      </nav>
      <div className="bg-gray-900 py-5 rounded-br-3xl px-1">
        {user !== null && (
          <div className="">
            <p className="text-bold text-xl text-white mb-2">{user?.email}</p>
            <Button
              onClick={handleLogout}
              className="p-3  bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
