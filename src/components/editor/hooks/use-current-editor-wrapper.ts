import { useCurrentEditor } from "@tiptap/react"

export function useCurrentEditorWrapper() {
  const { editor } = useCurrentEditor()

  if (!editor) {
    throw new Error("Editor instance not found")
  }

  return editor
}
