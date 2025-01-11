import * as React from "react";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

export function AdminSelectOption({ name, control }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          value={field.value}
          onValueChange={field.onChange} // Correctly capture the selected value
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Admin Role" />
          </SelectTrigger>
          <SelectContent className="max-h-60 overflow-y-auto">
            <SelectGroup>
              <SelectItem value="Financial Admin">Financial Admin</SelectItem>
              <SelectItem value="Content Manager">Content Manager</SelectItem>
              <SelectItem value="Course Admin">Course Admin</SelectItem>
              <SelectItem value="Super Admin">Super Admin</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
}
