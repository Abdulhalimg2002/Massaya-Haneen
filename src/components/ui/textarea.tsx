import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-[#3d2f23]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
