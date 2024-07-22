import { Form } from "@/Components/ui/form";
import FormInput from "@/Components/ui/form-input";
import { PasswordInput } from "@/Components/ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(4, { message: "Name must be at least 4 characters long" }),
});
const Login = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div>
      <div className="border-lms-border mx-auto max-w-[465px] rounded-2xl border px-8 py-10">
        <h1>Sign up and start learning</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(() => {
              console.log("form validated");
            })}
          >
            <FormInput
              label=""
              name=""
              control={form.control}
              type="text"
              id=""
              placeholder="password"
            />
            <PasswordInput
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              label=""
              name=""
              control={form.control}
              placeholder="password"
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
