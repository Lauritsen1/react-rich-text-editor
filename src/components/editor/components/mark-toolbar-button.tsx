"use client"

import { Bold, Italic } from "lucide-react"

import { useCurrentEditorWrapper } from "../hooks/use-current-editor-wrapper"
import { ToolbarToggle } from "./toolbar-toggle"

type MarkType = "bold" | "italic"

const markIcons = {
  bold: Bold,
  italic: Italic,
}

interface MarkToolbarButtonProps {
  markType: MarkType
  tooltip?: string
}

export function MarkToolbarButton({
  markType,
  tooltip,
}: MarkToolbarButtonProps) {
  const editor = useCurrentEditorWrapper()

  const Icon = markIcons[markType]

  return (
    <ToolbarToggle
      tooltip={tooltip || null}
      data-state={editor.isActive(markType) ? "on" : "off"}
      onClick={() => editor.chain().focus().toggleMark(markType).run()}
    >
      <Icon className="h-4 w-4" />
    </ToolbarToggle>
  )
}
