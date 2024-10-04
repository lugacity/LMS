import { addLiveSession } from "@/services/api"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

export const useCreateLiveSession = () => {
  const { mutate: createLiveSession, isPending: isCreating } = useMutation({
    mutationFn: addLiveSession,
    onSuccess: ({ data }) => toast.success(data.message),
    onError: (err) => toast.error(err.response.data.message || "something went wrong")
  })

  return { createLiveSession, isCreating }
}