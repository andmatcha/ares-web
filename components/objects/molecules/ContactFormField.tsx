"use client";

import { HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  id: string;
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  onBlur: () => void;
  type?: HTMLInputTypeAttribute;
  multiline?: boolean;
  containerClassName?: string;
};

const inputClassName =
  "h-8 bg-white text-black flex items-center rounded-sm border border-gray-300 p-2";
const textareaClassName =
  "bg-white text-black flex items-center rounded-sm border border-gray-300 p-2";

const ContactFormField = ({
  id,
  label,
  registration,
  error,
  onBlur,
  type = "text",
  multiline = false,
  containerClassName = "flex flex-col gap-2 px-4 py-2",
}: Props) => {
  return (
    <div className={containerClassName}>
      <label htmlFor={id}>{label}</label>
      {multiline ? (
        <textarea
          id={id}
          {...registration}
          onBlur={onBlur}
          cols={30}
          rows={16}
          className={textareaClassName}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          {...registration}
          onBlur={onBlur}
          className={inputClassName}
        />
      )}
      <div className="h-4">
        {error && <p className="text-red-600 text-sm">{error.message}</p>}
      </div>
    </div>
  );
};

export default ContactFormField;
