import { HeadingSelect } from "../components/heading-select"
import { MarkToolbarButton } from "../components/mark-toolbar-button"
import { ToolbarButtonGroup } from "../components/toolbar-button-group"

export function FixedToolbar() {
  return (
    <div className="flex select-none border-b p-1 ">
      <HeadingSelect />
      <ToolbarButtonGroup>
        <MarkToolbarButton markType="bold" />
        <MarkToolbarButton markType="italic" />
      </ToolbarButtonGroup>
    </div>
  )
}
