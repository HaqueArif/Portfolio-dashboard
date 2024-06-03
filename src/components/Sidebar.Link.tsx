import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LibraryBig } from "lucide-react";
import "@/styles/Sidebar.css";
import { NavlinkProps } from "./Types";

export const SidebarLink = ({ to, label }: NavlinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn("dropdown-style", {
          "dropdown-active": isActive,
        })
      }
    >
      <LibraryBig className="shrink-0" />
      <span className="truncate">{label}</span>
    </NavLink>
  );
};
