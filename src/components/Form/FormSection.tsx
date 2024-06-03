import cn from "../../utils/cn";

export const FormSection = ({ children }) => {
  // const { double = false } = useContext(FormElementContext);
  return <div className={cn(" w-full ", {})}>{children}</div>;
};
