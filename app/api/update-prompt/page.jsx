import EditPrompt from "@components/EditPrompt"
import { Suspense } from "react"

const UpdatePrompt = () => {
  return (
   <Suspense fallback = "Loading...">
    <EditPrompt/>
   </Suspense>
  )
}

export default UpdatePrompt