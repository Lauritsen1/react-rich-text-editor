"use client"

import { useCurrentEditor } from "@tiptap/react"

import { Toggle } from "@/components/ui/toggle"

import { MARKS } from "../lib/editor-elements"
import { MarkType } from "../lib/types"

export function MarkToolbarButton({ markType }: { markType: MarkType }) {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  const mark = MARKS.find((mark) => mark.value === markType)

  if (!mark) {
    return null
  }

  return (
    <Toggle
      value={markType}
      data-state={editor.isActive(markType) ? "on" : "off"}
      onClick={() => mark.action(editor)}
    >
      <mark.icon className="h-4 w-4" />
    </Toggle>
  )
}
