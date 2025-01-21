"use client";

import { Dropdown, Input } from "@nextui-org/react";
import style from "./style.module.css";

type NuiInputProps = {
  label: string;
  placeholder?: string;
  register?: any;
  disabled?: boolean;
  value?: any;
  type?: string;
  additionalCSS?: string;
  options?: Array<Object>
};

export function NUIInput({
  label,
  register,
  placeholder,
  disabled = false,
  value = '',
  type = 'inputField',
  options= [],
  additionalCSS = '',
  ...props
}: NuiInputProps) {

  return (
    <>
      {
        (type === "inputField") &&
        <Input
          labelPlacement="outside"
          variant="bordered"
          radius="sm"
          label={label}
          disabled={disabled}
          value={value}
          placeholder={placeholder || " "}
          {...register}
          {...props}
          classNames={{
            base: "mb-4",
            inputWrapper: "h-12",
            label: additionalCSS !== undefined ? style[additionalCSS] : style.label,
          }}
        />
      }
      {
        (type === "dropdown") &&
        <Input
          label={label}
          value={value}
          placeholder={placeholder || " "}
        />
      }
    </>
  );
}
