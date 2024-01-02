"use client"

import { useCurrentEditor } from "@tiptap/react"
import { Bold, Italic } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

type MarkType = "bold" | "italic"

const markIcons = {
  bold: Bold,
  italic: Italic,
}

export function MarkToolbarButton({ markType }: { markType: MarkType }) {
  const { editor } = useCurrentEditor()

  if (!editor) return null

  const Icon = markIcons[markType]

  return (
    <Toggle
      value={markType}
      data-state={editor.isActive(markType) ? "on" : "off"}
      onClick={() => editor.chain().focus().toggleMark(markType).run()}
    >
      <Icon className="h-4 w-4" />
    </Toggle>
  )
}
