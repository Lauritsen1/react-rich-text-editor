import { useEffect, useState } from "react"
import { Editor } from "@tiptap/react"

interface Node {
  nodeName: string
  nodeAttrs: any
}

export function useSelectedNode(editor: Editor) {
  const [node, setNode] = useState<Node>({ nodeName: "", nodeAttrs: {} })

  useEffect(() => {
    const { $from } = editor.state.selection
    const node = $from.node()
    const nodeName = node.type.name
    const nodeAttrs = node.attrs

    setNode({ nodeName, nodeAttrs })
  }, [editor.state.selection])

  return node
}
