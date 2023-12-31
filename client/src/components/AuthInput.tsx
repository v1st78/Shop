import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function AuthInput({
  label,
  name,
  type,
  isError = false,
  required = false,
  errorMessage = "",
  mb = "2",
}: {
  label: string;
  name: string;
  type: string;
  isError?: boolean;
  required?: boolean;
  errorMessage?: string;
  mb?: string;
}) {
  const [show, setShow] = useState(false);

  const borderStyle = isError
    ? "border-error"
    : "border-border hover:border-primary focus:border-primary dark:border-dark-border";

  return (
    <div className={`mb-${mb} ${type === "password" && "relative"}`}>
      <label htmlFor={name} className="mb-1 block">
        {label}{" "}
        <span className="text-sm text-error">{isError && errorMessage}</span>
      </label>
      <input
        name={name}
        className={`mb-2 w-full border-2 p-2 outline-none dark:text-copy ${borderStyle}`}
        type={type !== "password" ? type : show ? "text" : "password"}
        required={required}
      />
      {type === "password" && (
        <button
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2"
          type="button"
        >
          {show ? (
            <EyeSlashIcon className="h-6 w-6 text-copy" />
          ) : (
            <EyeIcon className="h-6 w-6 text-copy" />
          )}
        </button>
      )}
    </div>
  );
}
export default AuthInput;
