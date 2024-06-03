import { useDeleteProjectMutation } from "@/redux/fetures/supply/projectApi";
import { XIcon } from "lucide-react";

const DeleteProject = ({ _id }) => {
  // const handleDelete = useDeleteHandler();
  const [deleteSupply] = useDeleteProjectMutation();
  return (
    <button
      onClick={() => deleteSupply(_id)}
      className="bg-red-600 hover:bg-red-400 p-2 rounded-full text-white "
    >
      <XIcon />
    </button>
  );
};

export default DeleteProject;
