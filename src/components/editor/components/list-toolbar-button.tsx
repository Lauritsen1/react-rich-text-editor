import { List, ListOrdered } from "lucide-react"

import { useCurrentEditorWrapper } from "../hooks/use-current-editor-wrapper"
import { ToolbarToggle } from "./toolbar-button"

type ListType = "bulletList" | "orderedList"

interface ListToolbarButtonProps {
  listType: ListType
  tooltip?: string
}

const listIcons = {
  bulletList: List,
  orderedList: ListOrdered,
}

export function ListToolbarButton({
  listType,
  tooltip,
}: ListToolbarButtonProps) {
  const editor = useCurrentEditorWrapper()

  const Icon = listIcons[listType]

  return (
    <ToolbarToggle
      tooltip={tooltip || ""}
      data-state={editor.isActive(listType) ? "on" : "off"}
      onClick={() =>
        editor.chain().focus().toggleList(listType, "listItem").run()
      }
    >
      <Icon className="h-4 w-4" />
    </ToolbarToggle>
  )
}
