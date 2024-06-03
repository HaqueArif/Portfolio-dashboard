import "@/styles/Sidebar.css";
import { SidebarLink } from "../Sidebar.Link";

const AllProjectsSidebar = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-1">
        <SidebarLink to="/dashboard/projects" label="Projects" />
      </div>
    </div>
  );
};

export default AllProjectsSidebar;
