import React from "react";
import { AdminSelectOption } from "./AdminSelectOption";
import DashButton from "@/pages/auth/ButtonDash";
import { useCreateAdminRole } from "@/hooks/account-management/use-create-admin-role";
import { useForm, FormProvider } from "react-hook-form"; // Import FormProvider
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"; // Add zod for schema validation
import FormInput from "@/Components/ui/form-input";

// Define schema for form validation using Zod
const sessionSchema = z.object({
  first_name: z
    .string()
    .min(1, { message: "This field is required" })
    .max(70, { message: "you've reached the max character length" }),
  last_name: z
    .string()
    .min(1, { message: "This field is required" })
    .max(70, { message: "you've reached the max character length" }),
 
  email: z
    .string()
    .min(1, { message: "This field is required" })
    .max(70, { message: "you've reached the max character length" })
    .email({ message: "Invalid email address" }), // Add email validation
});

const CreateAdminRole = () => {
  const { create, isPending } = useCreateAdminRole();
  console.log("successfully created", create);
  console.log("is creating", isPending);

  const form = useForm({
    resolver: zodResolver(sessionSchema), // Use schema for validation
    defaultValues: {
      first_name: "",
      last_name: "",
      role: "",
      email: "",
    },
  });

  const onSubmit = (data) => {
    create(data); 
    console.log("Form Data:", data);
  };

  return (
    <div>
      {/* Coupon Creation Content */}
      <div className="space-y-4 pb-8">
        <h3 className="text-[20px] font-[500] text-[#344054] lg:text-[24px]">
          Add New Admin
        </h3>
        <p className="text-[#667185]">Enter credentials to create admin account</p>
      </div>

      <FormProvider {...form}>
        {/* Wrap the form with FormProvider */}
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* First Name Field */}
          <div className="mb-4">
            <p className="font-[500]">First Name</p>
            <FormInput
              name="first_name"
              control={form.control}
              placeholder="Enter First Name"
              className="w-full rounded border border-gray-300 p-3"
            />
            {/* Show error message */}
            {form.formState.errors.first_name && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.first_name.message}
              </p>
            )}
          </div>

          {/* Last Name Field */}
          <div className="mb-4">
            <p className="font-[500]">Last Name</p>
            <FormInput
              name="last_name"
              control={form.control}
              placeholder="Enter Last Name"
              className="w-full rounded border border-gray-300 p-3"
            />
            {/* Show error message */}
            {form.formState.errors.last_name && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.last_name.message}
              </p>
            )}
          </div>

          {/* Email Address Field */}
          <div className="mb-6">
            <p className="font-[500]">Email Address</p>
            <FormInput
              name="email"
              control={form.control}
              placeholder="Enter Email Address"
              className="w-full rounded border border-gray-300 p-3"
            />
            {/* Show error message */}
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          {/* Admin Role Field */}
          <div className="mb-6">
            <p className="font-[500]">Select Admin Role</p>
            <AdminSelectOption name="role" control={form.control} />
            {/* Show error message */}
            {form.formState.errors.role && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.role.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full">
            <DashButton
              type="submit"
              className="hover:bg-primary-color-700 w-full rounded-md bg-primary-color-600 px-9 py-2 text-white"
              disabled={isPending}
            >
              {isPending ? "Creating..." : "Create Account"}
            </DashButton>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateAdminRole;
