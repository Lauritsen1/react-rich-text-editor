import { useEffect, useRef } from "react"
import { Editor } from "@tiptap/react"

export function useTextSelectionRef(editor: Editor) {
  const ref = useRef<any>(null)

  useEffect(() => {
    const updateRef = () => {
      const { from, to } = editor.state.selection

      if (from !== to) {
        const start = editor.view.coordsAtPos(from)
        const end = editor.view.coordsAtPos(to)

        ref.current = {
          getBoundingClientRect: () => ({
            width: end.left - start.left,
            height: end.bottom - start.top,
            top: start.top,
            bottom: end.bottom,
            left: start.left,
            right: end.right,
          }),
        }
      } else {
        ref.current = null
      }
    }

    updateRef()

    editor.on("transaction", updateRef)
    return () => {
      editor.off("transaction", updateRef)
    }
  }, [editor])

  return ref
}
