import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import { CommonButton } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

export function Filter() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <CommonButton variant="outline" className='border border-[#667185] outline-none'>
        <FontAwesomeIcon icon={faFilter} className="mr-2 text-[#667185] " />
            Filter
        </CommonButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select Course</DropdownMenuLabel>    
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="ac">All courses</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="cc">Completed courses</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ipc">In progress courses</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
