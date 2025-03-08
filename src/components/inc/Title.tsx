import React from 'react'
import { Text } from 'tamagui'

interface Props {
  text: string;
}

function Title({
  text,
  ...rest
}:Props) {
  return (
    <Text fos="$8" fow="600" {...rest}>{text}</Text>
  )
}

export default Title