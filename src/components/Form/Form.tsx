import { createContext } from "react";
import cn from "../../utils/cn";
import { TForm } from "@/types";

export const FormElementContext = createContext<{ double: boolean } | null>(
  null
);

export const Form = ({
  children,
  onSubmit,
  className,
  double = false,
}: TForm) => {
  return (
    <FormElementContext.Provider value={{ double }}>
      <form
        onSubmit={onSubmit}
        className={`{${cn}(
          "rounded-md border shadow-md  w-full  p-5 py-5  mx-auto",
          {
            "max-w-5xl": double,
            "max-w-lg": !double,
          }
        )${className}}`}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};
