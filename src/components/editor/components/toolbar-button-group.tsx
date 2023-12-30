import { Separator } from "@/components/ui/separator"

export function ToolbarButtonGroup({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Separator orientation="vertical" className="mx-1 h-auto" />
      <div className="space-x-1">{children}</div>
    </>
  )
}
