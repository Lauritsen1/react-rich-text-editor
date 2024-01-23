"use client"

import { useEffect, useState } from "react"
import { Editor } from "@tiptap/react"
import { ExternalLink, Link, Type, Unlink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

import { useCurrentEditorWrapper } from "../hooks/use-current-editor-wrapper"
import { useTextSelectionRef } from "../hooks/use-text-selection-ref"
import { ToolbarToggle } from "./toolbar-toggle"

export function LinkToolbarToggle({ tooltip }: { tooltip?: string }) {
  const editor = useCurrentEditorWrapper()
  const ref = useTextSelectionRef(editor)

  const isLink = editor.isActive("link")
  const linkAttributes = editor.getAttributes("link")

  const [showPopver, setShowPopver] = useState(false)

  const [link, setLink] = useState<{ url: string; text: string }>({
    url: "",
    text: "",
  })

  const handleLink = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && link.url.trim()) {
      editor
        .chain()
        .focus()
        .setLink({ href: link.url })
        .command(({ tr }) => {
          tr.insertText(link.text || link.url)
          return true
        })
        .run()
    }
  }

  useEffect(() => {
    const { from, to } = editor.state.selection
    const linkText = editor.state.doc.textBetween(from, to)

    if (isLink) {
      setLink({ url: linkAttributes.href, text: linkText })
    } else {
      setLink({ url: "", text: linkText })
    }
  }, [editor.state.selection, isLink])

  return (
    <>
      <Popover open={showPopver} onOpenChange={setShowPopver}>
        <PopoverTrigger asChild>
          <span>
            <ToolbarToggle
              tooltip={tooltip || null}
              data-state={isLink ? "on" : "off"}
            >
              <Link className="h-4 w-4" />
            </ToolbarToggle>
          </span>
        </PopoverTrigger>
        <PopoverAnchor virtualRef={ref} />
        <PopoverContent className="w-[275px] p-1" side="bottom" align="start">
          <div onKeyUp={handleLink}>
            <div className="flex items-center">
              <Link className="ml-3 h-4 w-4 text-muted-foreground" />
              <Input
                className="border-0 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Paste link"
                value={link.url}
                onChange={(e) => setLink({ ...link, url: e.target.value })}
              />
            </div>
            <Separator className="my-1 w-auto" />
            <div className="flex items-center">
              <Type className="ml-3 h-4 w-4 text-muted-foreground" />
              <Input
                className="border-none focus-visible:ring-transparent"
                placeholder="Text to display"
                value={link.text}
                onChange={(e) => setLink({ ...link, text: e.target.value })}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <LinkOptions
        editor={editor}
        showPopver={showPopver}
        setShowPopver={setShowPopver}
        textRef={ref}
      />
    </>
  )
}

interface LinkOptionsProps {
  editor: Editor
  showPopver: boolean
  setShowPopver: (show: boolean) => void
  textRef: ReturnType<typeof useTextSelectionRef>
}

function LinkOptions({
  editor,
  showPopver,
  setShowPopver,
  textRef: ref,
}: LinkOptionsProps) {
  const handleUnlink = () => {
    editor.chain().extendMarkRange("link").unsetLink().run()
  }

  return (
    <Popover open={!showPopver && editor.isActive("link")}>
      <PopoverAnchor virtualRef={ref} />
      <PopoverContent className="w-auto p-1" side="bottom" align="start">
        <div className="flex">
          <Button
            onClick={() => setShowPopver(true)}
            variant="ghost"
            className="font-semibold"
          >
            Edit link
          </Button>
          <Separator orientation="vertical" className="mx-1 h-auto" />
          <div className="flex">
            <Button variant="ghost" size="icon" asChild>
              <a
                href={editor.getAttributes("link").href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Separator orientation="vertical" className="mx-1 h-auto" />
            <Button variant="ghost" size="icon" onClick={handleUnlink}>
              <Unlink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
