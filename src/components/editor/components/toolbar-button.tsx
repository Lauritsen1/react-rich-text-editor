import { ComponentPropsWithoutRef, ReactNode } from "react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type ToolbarButtonProps = ComponentPropsWithoutRef<typeof Button> & {
  children: ReactNode
  tooltip?: string | null
}

export function ToolbarButton({
  children,
  tooltip,
  ...props
}: ToolbarButtonProps) {
  return tooltip ? (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button {...props}>{children}</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  ) : (
    <Button {...props}>{children}</Button>
  )
}
