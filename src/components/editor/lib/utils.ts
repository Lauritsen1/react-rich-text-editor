import { Editor } from "@tiptap/react"

type ExtensionType = "node" | "mark" | "extension"

export function getAllExtensions(editor: Editor) {
  return editor.extensionManager.extensions
}

export function getExtensionsByType(editor: Editor, type: ExtensionType) {
  return getAllExtensions(editor).filter((extension) => extension.type === type)
}

export const getSelectedNode = (editor: Editor) => {
  const { $from } = editor.state.selection
  const node = $from.node()

  return node
}
