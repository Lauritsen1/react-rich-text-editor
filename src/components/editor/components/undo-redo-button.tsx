import { Editor } from "@tiptap/react"
import { LucideIcon, Redo, Undo } from "lucide-react"

import { useCurrentEditorWrapper } from "../hooks/use-current-editor-wrapper"
import { ToolbarButton } from "./toolbar-button"

interface UndoRedoButtonProps {
  type: "undo" | "redo"
  tooltip?: string
}

interface UndoRedoConfig {
  [key: string]: {
    icon: LucideIcon
    command: (editor: Editor) => void
    canExecute: (editor: Editor) => boolean
  }
}

const undoRedoConfig: UndoRedoConfig = {
  undo: {
    icon: Undo,
    command: (editor: Editor) => editor.chain().focus().undo().run(),
    canExecute: (editor: Editor) => editor.can().undo(),
  },
  redo: {
    icon: Redo,
    command: (editor: Editor) => editor.chain().focus().redo().run(),
    canExecute: (editor: Editor) => editor.can().redo(),
  },
}

export function UndoRedoButton({ type, tooltip }: UndoRedoButtonProps) {
  const editor = useCurrentEditorWrapper()

  const { icon: Icon, command, canExecute } = undoRedoConfig[type]

  return (
    <ToolbarButton
      tooltip={tooltip || null}
      variant="ghost"
      size="icon"
      onClick={() => command(editor)}
      disabled={!canExecute(editor)}
    >
      <Icon className="h-4 w-4" />
    </ToolbarButton>
  )
}
