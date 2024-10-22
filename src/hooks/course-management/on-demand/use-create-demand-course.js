import { addDemandSection, editDemandSection } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useCreateOnDemandCourse() {
  const queryClient = useQueryClient()
  const { mutate: createOnDemandCourse, isPending: isCreating } = useMutation({
    mutationFn: addDemandSection,
    onSuccess: ({ data }) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["get-demand-course"],
      });
    },
    onError: (err) =>
      toast.error(err.response.data.message || "something went wrong"),
  });

  return { createOnDemandCourse, isCreating, }
}

export function useEditOnDemandCourse() {
  const queryClient = useQueryClient()
  const { mutate: editOnDemandCourse, isPending: isEditing } = useMutation({
    mutationFn: editDemandSection,
    onSuccess: ({ data }) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["get-demand-course"],
      });
    },
    onError: (err) =>
      toast.error(err.response.data.message || "something went wrong"),
  });

  return { editOnDemandCourse, isEditing }
}