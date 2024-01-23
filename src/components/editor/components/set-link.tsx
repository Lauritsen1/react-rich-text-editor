import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function SetLink() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <span>
          <ToolbarToggle
            tooltip={tooltip || null}
            data-state={isActive ? "on" : "off"}
          >
            <Link className="h-4 w-4" />
          </ToolbarToggle>
        </span>
      </PopoverTrigger>
      <PopoverAnchor virtualRef={ref} />
      <PopoverContent side="bottom" align="start">
        {prevUrl && (
          <SetLink
            url={url}
            setUrl={setUrl}
            title={title}
            setTitle={setTitle}
            handleLink={handleLink}
          />
        )}
        {isActive && <LinkOptions handleUnlink={handleUnlink} />}
      </PopoverContent>
    </Popover>
  )
}
