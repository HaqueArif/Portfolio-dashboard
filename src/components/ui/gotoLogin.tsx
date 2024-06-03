import { NavLink } from "react-router-dom";
import { DialogDescription, DialogHeader, DialogTitle } from "./dialog";

const GotoLogin = () => {
  return (
    <DialogHeader>
      <DialogTitle> Please! Login first</DialogTitle>
      <DialogDescription>
        <NavLink
          className="text-3xl text-white px-5 py-3 rounded-lg text-center block bg-primary "
          to="/login"
        >
          Go to login
        </NavLink>
      </DialogDescription>
    </DialogHeader>
  );
};

export default GotoLogin;
