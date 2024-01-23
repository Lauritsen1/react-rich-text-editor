import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { useCurrentEditorWrapper } from "../hooks/use-current-editor-wrapper"
import { useTextSelectionRef } from "../hooks/use-text-selection-ref"

export function BubbleMenu() {
  const editor = useCurrentEditorWrapper()
  const ref = useTextSelectionRef(editor)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <span>Open</span>
      </PopoverTrigger>
      <PopoverAnchor virtualRef={ref} />
      <PopoverContent side="bottom" align="start">
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  )
}
