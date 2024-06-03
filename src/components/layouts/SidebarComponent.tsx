// File: Sidebar.jsx

import { ChevronRight } from "lucide-react";
import Sidebar from "./Sidebar";
import { SidebarComponentProps } from "../Types";

const SidebarComponent = ({
  sidebarOpen,
  toggleSidebar,
}: SidebarComponentProps) => {
  return (
    <div
      className="glass-gradient"
      style={{
        position: "fixed",
        top: "0",
        left: sidebarOpen ? "0" : "-240px",
        height: "100%",
        width: "250px",
        transition: "left 0.1s ease-in-out",
        zIndex: 1,
      }}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-[50%] left-[230px] z-10"
      >
        <ChevronRight
          className="hover:text-primary hover:scale-150 transition-all"
          size={44}
        />
      </button>
      <Sidebar />
    </div>
  );
};

export default SidebarComponent;
