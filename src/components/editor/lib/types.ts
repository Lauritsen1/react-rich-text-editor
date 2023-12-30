import { Editor } from "@tiptap/react"
import { LucideIcon } from "lucide-react"

export type NodeType = string
export type MarkType = "bold" | "italic"

export interface ElementType<T> {
  value: T
  label: string
  icon: LucideIcon
  action: (editor: Editor) => void
}
