"use client";

import { useForm } from "react-hook-form";
import { NUIButton } from "./Button";
import { NUIInput } from "./Input";

export const Form = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data)
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <NUIInput key={"placement"} label="Email" register={register} />
          <NUIButton type={"submit"} label={"SAVE AND CONTINUE"} />
        </form>
      </div>
    </div>
  );
};
