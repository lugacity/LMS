import { addDemandSection } from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useCreateOnDemandCourse() {
  const { mutate: createOnDemandCourse, isPending: isCreating } = useMutation({
    mutationFn: addDemandSection,
    onSuccess: ({ data }) => {
      toast.success(data.message);

    },
    onError: (err) =>
      toast.error(err.response.data.message || "something went wrong"),
  });

  return { createOnDemandCourse, isCreating }
}