import { Heading1, Heading2, Heading3, LucideIcon, Pilcrow } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useCurrentEditorWrapper } from "../hooks/use-current-editor-wrapper"
import { useSelectedNode } from "../hooks/use-selected-node"
import { getExtensionsByType } from "../lib/utils"

const headingIcons: Record<string, LucideIcon> = {
  "1": Heading1,
  "2": Heading2,
  "3": Heading3,
}

export function HeadingSelect() {
  const editor = useCurrentEditorWrapper()

  const { nodeName, nodeAttrs } = useSelectedNode(editor)
  const nodeExtensions = getExtensionsByType(editor, "node")
  const headings = nodeExtensions.find((ext) => ext.name === "heading")

  const onValueChange = (value: string) => {
    if (value === "paragraph") {
      editor.chain().focus().setNode("paragraph").run()
    } else {
      const level: number = parseInt(value)
      editor.chain().focus().setNode("heading", { level }).run()
    }
  }

  const current = {
    value: nodeName === "heading" ? nodeAttrs.level : "paragraph",
    label: nodeName === "heading" ? `Heading ${nodeAttrs.level}` : "Paragraph",
  }

  return (
    <Select onValueChange={onValueChange} value={current.value}>
      <SelectTrigger className="w-[180px] border-none ring-transparent hover:bg-accent">
        <SelectValue>
          <span className="font-semibold">{current.label}</span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {headings?.options.levels.map((level: string) => {
          const Icon = headingIcons[level]
          return (
            <SelectItem key={level} value={level}>
              <div className="flex items-center">
                <Icon className="mr-2 h-5 w-5" />
                Heading {level}
              </div>
            </SelectItem>
          )
        })}
        <SelectItem value="paragraph">
          <div className="flex items-center">
            <Pilcrow className="mr-2 h-5 w-5" />
            paragraph
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
