/* eslint-disable @typescript-eslint/no-explicit-any */
type InputProps = {
  label: string;
  register: any;
  errors: any;
  type: string;
  id: string;
  defaultValue?: string;
  placeholder: string;
  disabled?: boolean;
  className?: string;
};

export const Input = ({
  label,
  register,
  errors,
  type,
  id,
  placeholder,
  defaultValue,
  disabled,
  className,
}: InputProps) => {
  return (
    <div className="w-full max-w-md">
      <label className="block" htmlFor={id}>
        {label}
      </label>
      <input
        className={`"border-2 w-full rounded ps-1"${className}`}
        type={type}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        {...register}
      />
      {errors[id] && <span>{errors[id].message}</span>}
    </div>
  );
};
