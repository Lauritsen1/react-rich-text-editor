import { Separator } from "@/components/ui/separator"

export function ToolbarControlGroup({
  children,
  noSeparator,
}: {
  children: React.ReactNode
  noSeparator?: boolean
}) {
  return (
    <>
      <div className="space-x-1">{children}</div>
      {!noSeparator && (
        <Separator orientation="vertical" className="mx-1 h-auto" />
      )}
    </>
  )
}
