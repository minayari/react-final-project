import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import { useCallback } from "react";
import { useState } from "react";

export default function LoginForm() {
  const formSchema = yup.object({
    // firstName: yup
    //   .string()
    //   .required("First name required!")
    //   .matches(
    //     /^[a-z \u0600-\u06ff\s]+$/,
    //     "First name should only contain characters"
    //   ),

    // lastName: yup
    //   .string()
    //   .required("Last name required!")
    //   .matches(
    //     /^[a-z \u0600-\u06ff\s]+$/,
    //     "Last name should only contain characters"
    //   ),

    email: yup
      .string()
      .required("Email is required!")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address"
      ),

    password: yup
      .string()
      .required("Password required!")
      .min(8, "Minimum 8 characters!")
      .matches(
        /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/,
        "Password should contain numbers and characters"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const submitForm = useCallback((formData) => {
    console.log(formData);
  }, []);

  return (
    <>
      <div className="w-[23rem] h-[26rem] mx-auto my-[5rem] flex flex-col">
        <h2 className="text-cyan-800 font-bold text-[2rem]">Login</h2>
        <form action="/sumbited-form" onSubmit={handleSubmit(submitForm)}>
          <div className="my-[3rem]">
            <TextField
              {...register("email")}
              fullWidth
              label="Email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </div>

          <div>
            <TextField
              {...register("password")}
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>

          <div className="text-center my-[3rem] ">
            <button
              className="bg-cyan-800 px-[1rem] py-[0.5rem] rounded-[0.5rem] text-white hover:text-cyan-800 hover:bg-white transition ease-in duration-200 hover:cursor-pointer hover:ring ring-cyan-800"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
