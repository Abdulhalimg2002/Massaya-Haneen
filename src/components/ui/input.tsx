import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-[#3d2f23]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
