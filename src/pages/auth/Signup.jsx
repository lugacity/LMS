import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import AviNav from "@/Components/avi/AviNav";
import BorderCard from "@/Components/BorderCard";
import { CommonButton } from "@/Components/ui/button";
import { Form } from "@/Components/ui/form";
import FormInput from "@/Components/ui/form-input";
import { PasswordInput } from "@/Components/ui/password-input";
import { Heading, Paragraph } from "./components/Text";

const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(4, { message: "Name must be at least 4 characters long" }),
});

const SignUp = () => {
  // const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <>
      <AviNav />
      <div className="py-10">
        <BorderCard className="mx-auto max-w-[465px]">
          <div className="mb-8 space-y-1">
            <Heading>Sign up and start learning</Heading>
            <Paragraph>Use your email to sign up</Paragraph>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(() => {
                console.log("form validated");
              })}
              className="space-y-4"
            >
              <FormInput
                label="firstname"
                name="firstname"
                control={form.control}
                type="text"
                id="firstname"
                placeholder=""
              />
              <FormInput
                label="lastname"
                name="lastname"
                control={form.control}
                type="text"
                id="lastname"
                placeholder=""
              />
              <FormInput
                label="username"
                name="username"
                control={form.control}
                type="text"
                id="username"
                placeholder=""
              />
              <FormInput
                label="email"
                name="email"
                control={form.control}
                type="email"
                id="email"
                placeholder=""
              />
              <PasswordInput
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                label="password"
                name="password"
                control={form.control}
                placeholder=""
              />
              <PasswordInput
                id="confirmPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                label="confirm password"
                name="confirmPassword"
                control={form.control}
                placeholder=""
              />
              <PasswordInput
                id="referralCode"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                label="referral Code"
                name="referralCode"
                control={form.control}
                placeholder=""
              />
            </form>
          </Form>

          <div className="mt-8 flex gap-4">
            <input type="checkbox" name="" id="" />
            <p className="text-label text-sm">
              Send me exclusive offers, tailored recommendations, and
              educational tips.
            </p>
          </div>

          <CommonButton
            className="bg-primary-color-600 font-poppins hover:bg-primary-color-600 mt-8 w-full text-xl font-semibold capitalize text-white"
            type="submit"
          >
            sign up
          </CommonButton>
        </BorderCard>
        <p className="mt-10 flex items-center justify-center gap-4 text-center">
          <span className="text-sm text-[#514A4A]">
            Already have an account?
          </span>
          <Link
            to={"/login"}
            className="text-primary-color-600 text-sm font-semibold capitalize"
          >
            sign in
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;