"use client"

import Link from "@tiptap/extension-link"
import { EditorProvider, FloatingMenu } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

import { FixedToolbar } from "./toolbars/fixed-toolbar"

export function Editor() {
  const extensions = [
    StarterKit.configure({
      heading: {
        levels: [1, 2, 3],
      },
    }),
    Link.configure({
      openOnClick: false,
    }),
  ]

  const content = `
    <h1>This is a Heading 1</h1>
    <h2>This is a Heading 2</h2>
    <h3>This is a Heading 3</h3>
    <p>This is a Paragraph</p>
    <a href="https://example.com">This is a Link</a>
   `

  const editorProps = {
    attributes: {
      class:
        "prose mx-auto my-8 px-6 lg:prose-lg dark:prose-invert focus:outline-none",
    },
  }

  return (
    <div className="w-full rounded-md border bg-background shadow-md">
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
      </EditorProvider>
    </div>
  )
}
