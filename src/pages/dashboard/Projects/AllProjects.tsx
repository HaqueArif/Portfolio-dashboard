import { useGetProjectsQuery } from "@/redux/fetures/supply/projectApi";

import { Link, NavLink } from "react-router-dom";
import DeleteProject from "./DeleteProject";
import UpdateProject from "./UpdateProject";

const AllProject = () => {
  const { data } = useGetProjectsQuery({});
  console.log(data);

  return (
    <div>
      <div className="py-10">
        <div className="max-w-7xl mx-auto glass-gradient p-2 sm:p-20 rounded-lg">
          <h3 className="text-4xl text-center font-extrabold mb-5">
            All Projects
          </h3>
          <div className="flex items-center justify-between">
            <h4 className=" text-xl font-extrabold">
              Total Item <span className="text-primary">{data?.length}</span>
            </h4>
            <NavLink
              className="bg-primary text-white px-3 py-1 rounded-lg"
              to="/dashboard/create-projects"
            >
              Add new +
            </NavLink>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 ">
            {data?.map((project) => (
              <div
                key={project.name}
                data-aos="fade-up"
                data-aos-duration="3000"
                className="w-full glass-gradient px-5 py-8 shadow-xl rounded-3xl relative"
              >
                <div className="absolute right-0 -top-5">
                  <DeleteProject _id={project._id} />
                </div>
                <div className="absolute right-12 -top-5">
                  <UpdateProject _id={project._id} />
                </div>
                <div className="mockup-window border border-accent bg-base-300 max-w-xl  h-60">
                  <div
                    className="projectImage flex justify-center h-full px-4 py-1 transition-all duration-[8s] bg-base-200 hover:bg-bottom"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                <p className="mt-3 capitalize">{project.name}</p>

                <div className="">
                  <div className="mt-5 flex flex-wrap gap-1">
                    <Link
                      to={project.live}
                      target="_blank"
                      className="bg-orange-400 text-white text-xs mr-2 mb-2 w-fit px-5 py-3 rounded-2xl duration-500 hover:rounded-3xl hover:border-b"
                    >
                      Visit site
                    </Link>
                    <Link
                      className="bg-orange-400 text-white text-xs mr-2 mb-2 w-fit px-5 py-3 rounded-2xl duration-500 hover:rounded-3xl hover:border-b"
                      to={project.server}
                      target="_blank"
                    >
                      Server Code
                    </Link>
                    <Link
                      className="bg-orange-400 text-white text-xs mb-2 w-fit px-5 py-3 rounded-2xl duration-500 hover:rounded-3xl hover:border-b"
                      to={project.client}
                      target="_blank"
                    >
                      Client Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProject;
