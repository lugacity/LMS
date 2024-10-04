import { useMutation } from "@tanstack/react-query"

import { addRecordedSession } from "@/services/api"
import toast from "react-hot-toast"

export const useCreateRecordedSession = () => {
  const { mutate: createRecordedSession, isPending: isCreating } = useMutation({
    mutationFn: addRecordedSession,
    onSuccess: ({ data }) => toast.success(data.message),
    onError: (err) => toast.error(err.response.data.message || "something went wrong")
  })

  return { createRecordedSession, isCreating }

}