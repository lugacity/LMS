import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import AviNav from "@/Components/avi/AviNav";
import BorderCard from "@/Components/BorderCard";
import { Heading, Paragraph } from "./components/Text";
import { Form } from "@/Components/ui/form";
import FormInput from "@/Components/ui/form-input";

import { CommonButton } from "@/Components/ui/button";
import PasswordInput from "@/Components/ui/password-input";
import axios from "axios";
import toast from "react-hot-toast";
// {
//     "status": "success",
//     "user": {
//         "id": "66c5019cb77de580f4274c96",
//         "firstname": "zainab",
//         "lastname": "wunmi",
//         "username": "lawal",
//         "email": "lawalzainabomowumi2021@gmail.com",
//         "status": "verified",
//         "wishlist": [],
//         "avatar": null,
//         "referral_code": "lawalPIM28AYSIG"
//     },
//     "message": "User verification successful, Please login to gain full access"
// }

// {
//     "status": "success",
//     "data": {
//         "user": {
//             "id": "66c5019cb77de580f4274c96",
//             "firstname": "zainab",
//             "lastname": "wunmi",
//             "username": "lawal",
//             "email": "lawalzainabomowumi2021@gmail.com",
//             "status": "verified",
//             "wishlist": [],
//             "avatar": null,
//             "referral_code": "lawalPIM28AYSIG"
//         },
//         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzUwMTljYjc3ZGU1ODBmNDI3NGM5NiIsImVtYWlsIjoibGF3YWx6YWluYWJvbW93dW1pMjAyMUBnbWFpbC5jb20iLCJpYXQiOjE3MjQxODc0ODUsImV4cCI6MTcyNDIwMTg4NX0.5QwTd79q7HST5aBb52_Zr0PCG6QRagPvRFgXeswuEs8"
//     },
//     "message": "Login successful"
// }

const loginSchema = z.object({
  username: z.string().min(1, { message: "name is required" }),
  password: z
    .string()
    .min(4, { message: "password must be at least 4 characters long" }),
});

const url = import.meta.env.VITE_AUTH_URL;

const Login = ({ setUserInfo, userInfo }) => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    const user = {
      userid: values.username,
      password: values.password,
    };

    console.log(values);

    const response = await axios.post(`${url}/login`, user);

    if (response.data.status === "success") {
      setUserInfo((state) => {
        return { ...state };
      });
      console.log(userInfo);

      navigate("/dashboard");
      toast.success("login successful");
    }
  };

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { isSubmitting, isLoading } = form.formState;

  return (
    <>
      <div className="flex h-[calc(100vh-100.547px)] w-full items-center justify-center">
        <div className="py-10">
          <BorderCard className="mx-auto max-w-[465px]">
            <div className="mb-8 space-y-1">
              <Heading>Welcome back!</Heading>
              <Paragraph>Use your email to sign in to your dashboard</Paragraph>
            </div>
            <Form {...form}>
              <form
                action=""
                className="space-y-2"
                onSubmit={form.handleSubmit(handleSubmit)}
              >
                <FormInput
                  name="username"
                  label="Username/Email"
                  placeholder=""
                  id="username"
                  type="text"
                  control={form.control}
                />
                <PasswordInput
                  id="password"
                  autoComplete="new-password"
                  label="password"
                  name="password"
                  control={form.control}
                  placeholder=""
                />

                <Link
                  to={"/forgot-password"}
                  className="block text-sm font-semibold capitalize text-primary-color-600"
                >
                  forgot password?
                </Link>

                <CommonButton
                   className="mt-8 w-full bg-primary-color-600 font-poppins text-[16px] font-[500] capitalize text-white hover:bg-primary-color-600"
                   type="submit" 
                >
                  {isSubmitting ? "loading..." : "sign in"}
                </CommonButton>
              </form>
            </Form>
          </BorderCard>
          <p className="mt-6 flex items-center justify-center gap-4 text-center">
            <span className="text-sm text-[#514A4A]">
              Already have an account?
            </span>
            <Link
              to={"/signup"}
              className="text-sm font-semibold capitalize text-primary-color-600"
            >
              sign up
            </Link>
          </p>
        </div>
      </div>

      {/* modals */}

      {/*  <Modal>
      {showModal &&  <PasswordResetSucess />}
      </Modal> */}
    </>
  );
};

export default Login;
