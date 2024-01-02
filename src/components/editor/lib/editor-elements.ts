import { Icon } from "@/components/editor/components/icon"

import { ElementType, MarkType, NodeType } from "./types"

export const NODES: ElementType<NodeType>[] = [
  {
    value: "heading1",
    label: "Heading 1",
    icon: Icon.Heading1,
    action: (editor) => editor.chain().focus().setHeading({ level: 1 }).run(),
  },
  {
    value: "heading2",
    label: "Heading 2",
    icon: Icon.Heading2,
    action: (editor) => editor.chain().focus().setHeading({ level: 2 }).run(),
  },
  {
    value: "heading3",
    label: "Heading 3",
    icon: Icon.Heading3,
    action: (editor) => editor.chain().focus().setHeading({ level: 3 }).run(),
  },
  {
    value: "paragraph",
    label: "Paragraph",
    icon: Icon.Pilcrow,
    action: (editor) => editor.chain().focus().setParagraph().run(),
  },
]
