"use client"

import { BubbleMenu, EditorProvider, FloatingMenu } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

import { FixedToolbar } from "./toolbars/fixed-toolbar"

export function Editor() {
  const extensions = [
    StarterKit.configure({
      heading: {
        levels: [1, 2, 3],
      },
    }),
  ]

  const content = `
    <h1>This is a Heading 1</h1>
    <h2>This is a Heading 2</h2>
    <h3>This is a Heading 3</h3>
    <p>This is a Paragraph</p>
   `

  const editorProps = {
    attributes: {
      class:
        "prose mx-auto my-8 px-6 lg:prose-lg dark:prose-invert focus:outline-none",
    },
  }

  return (
    <div className="w-full rounded-md border shadow">
      <EditorProvider
        slotBefore={<FixedToolbar />}
        extensions={extensions}
        content={content}
        editorProps={editorProps}
        injectCSS={false}
      >
        <FloatingMenu className="hidden">
          This is the floating menu
        </FloatingMenu>
        <BubbleMenu className="hidden">This is the bubble menu</BubbleMenu>
      </EditorProvider>
    </div>
  )
}
