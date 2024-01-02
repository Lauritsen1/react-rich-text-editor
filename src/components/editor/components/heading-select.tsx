import { useEffect, useState } from "react"
import { useCurrentEditor } from "@tiptap/react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { NODES } from "../lib/editor-elements"
import { getSelectedNode } from "../lib/utils"

export function HeadingSelect() {
  const { editor } = useCurrentEditor()

  if (!editor) return null

  const [activeNodeValue, setActiveNodeValue] = useState<string>("")
  const activeNode = NODES.find((node) => node.value === activeNodeValue)

  useEffect(() => {
    const node = getSelectedNode(editor)
    const nodeName = node.type.name
    const nodeAttrs = node.attrs

    setActiveNodeValue(
      nodeName === "heading" ? `heading${nodeAttrs.level}` : nodeName
    )

    editor.view.focus()
  }, [editor.state])

  const onValueChange = (value: string) => {
    const selectedNode = NODES.find((node) => node.value === value)

    if (selectedNode) {
      selectedNode.action(editor)
    }
  }

  return (
    <Select onValueChange={onValueChange} value={activeNodeValue}>
      <SelectTrigger className="w-[180px] border-none ring-transparent hover:bg-accent">
        <SelectValue>
          <span className="font-semibold">
            {activeNode ? activeNode.label : ""}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {NODES.map((node) => (
          <SelectItem key={node.value} value={node.value}>
            <div className="flex items-center">
              <node.icon className="mr-2 h-5 w-5" />
              {node.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
