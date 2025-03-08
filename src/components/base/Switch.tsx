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
      bg={`${isChecked ? "$primary" : "$grey.1"}`}
      borderWidth={0}
      size="$2"
      px="$1.5"
      py="$1"
    >
      <TMSwitch.Thumb animation="quick" bg="$white.100" size="$2" />
    </TMSwitch>
  )
}

export default Switch