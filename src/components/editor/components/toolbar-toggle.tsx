import { ComponentPropsWithoutRef, ReactNode } from "react"

import { Toggle } from "@/components/ui/toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type ToolbarItemProps = ComponentPropsWithoutRef<typeof Toggle> & {
  children: ReactNode
  tooltip: string | null
}

export function ToolbarToggle({
  children,
  tooltip,
  ...props
}: ToolbarItemProps) {
  return tooltip ? (
    <Tooltip>
      <TooltipTrigger asChild>
        <Toggle {...props}>{children}</Toggle>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  ) : (
    <Toggle {...props}>{children}</Toggle>
  )
}
