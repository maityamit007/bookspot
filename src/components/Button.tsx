"use client";

import { Button } from "@nextui-org/react";

type NuiButtonProps = {
  label: string;
  style?: object;
  type?: "button" | "submit";
  onclick?: Function;
  fullWidth?: boolean;
};

export function NUIButton({
  label,
  type = "button",
  onclick,
  fullWidth,
  style = {},
}: NuiButtonProps) {
  return (
    <Button
      variant="solid"
      color="primary"
      size="md"
      className={`mt-4 bg-primary md:px-24 w-full ${
        fullWidth ? " " : "md:w-fit"
      } `}
      style={{
        height: 60,
        borderRadius: 10,
        background: "#F96021",
        fontSize: 18,
        fontWeight: 500,
        ...style,
      }}
      type={type}
      onClick={() => onclick && onclick()}
    >
      {label}
    </Button>
  );
}
