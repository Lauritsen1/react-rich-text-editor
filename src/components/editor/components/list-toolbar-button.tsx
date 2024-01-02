import { useCurrentEditor } from "@tiptap/react"
import { List, ListOrdered } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

type ListType = "bulletList" | "orderedList"

const listIcons = {
  bulletList: List,
  orderedList: ListOrdered,
}

export function ListToolbarButton({ listType }: { listType: ListType }) {
  const { editor } = useCurrentEditor()

  if (!editor) return null

  const Icon = listIcons[listType]

  return (
    <Toggle
      data-state={editor.isActive(listType) ? "on" : "off"}
      onClick={() =>
        editor.chain().focus().toggleList(listType, "listItem").run()
      }
    >
      <Icon className="h-4 w-4" />
    </Toggle>
  )
}
