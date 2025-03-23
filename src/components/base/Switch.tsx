import React from 'react'
import { Switch as TMSwitch } from "tamagui"

interface Props {
  onCheckedChange: () => void;
  isChecked: boolean;
}

function Switch({
  onCheckedChange,
  isChecked
}:Props) {
  return (
    <TMSwitch
      checked={isChecked}
      onCheckedChange={onCheckedChange}
      bg={`${isChecked ? "$primary.6" : "$grey.5"}`}
      borderWidth={0}
      size="$3"
      px="$1.5"
      py="$1"
    >
      <TMSwitch.Thumb animation="quick" bg="white" />
    </TMSwitch>
  )
}

export default Switch