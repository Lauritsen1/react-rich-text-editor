import { TooltipProvider } from "@/components/ui/tooltip"

import { HeadingSelect } from "../components/heading-select"
import { ListToolbarButton } from "../components/list-toolbar-button"
import { MarkToolbarButton } from "../components/mark-toolbar-button"
import { ToolbarButtonGroup } from "../components/toolbar-button-group"
import { UndoRedoButton } from "../components/undo-redo-button"

export function FixedToolbar() {
  return (
    <TooltipProvider>
      <div className="flex select-none border-b p-1 ">
        <HeadingSelect />

        <ToolbarButtonGroup>
          <MarkToolbarButton markType="bold" tooltip="Bold (⌘ + B)" />
          <MarkToolbarButton markType="italic" tooltip="Italic (⌘ + I)" />
        </ToolbarButtonGroup>
        <ToolbarButtonGroup>
          <ListToolbarButton
            listType="bulletList"
            tooltip="Bullet List (⌘ + Shift + 8)"
          />
          <ListToolbarButton
            listType="orderedList"
            tooltip="Ordered List (⌘ + Shift + 7)"
          />
        </ToolbarButtonGroup>

        <ToolbarButtonGroup>
          <UndoRedoButton type="undo" tooltip="Undo (⌘ + Z)" />
          <UndoRedoButton type="redo" tooltip="Redo (⌘ + Y)" />
        </ToolbarButtonGroup>
      </div>
    </TooltipProvider>
  )
}
