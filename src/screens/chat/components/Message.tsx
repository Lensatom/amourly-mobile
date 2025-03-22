import { Icon } from '@/components/base'
import { getTime } from '@/helpers'
import React from 'react'
import { getTokens, Text, View, XStack } from 'tamagui'

interface Props {
  message: string,
  id: number | string,
  timestamp: any
}

function Message({
  message,
  id,
  timestamp
}:Props) {
  const user = {
    id: "1"
  }

  const isMe = () => {
    return id === user.id
  }

  return (
    <View ai={isMe() ? "flex-end" : "flex-start"} px="$2" my="$1">
      <View
        maxWidth={"80%"}
        br="$4"
        px="$4"
        py="$2.5"
        style={{
          elevation: 4,
          shadowColor: getTokens().color['$grey.3'].val,
          shadowOpacity: 0.2,
          backgroundColor: isMe() ? "white" : getTokens().color['$primary.1'].val,
        }}
      >
        <Text>{message}</Text>
        <XStack jc="flex-end" ai="center" gap="$2">
          <Text ta="right" fos="$1" color="$grey.7">{getTime(timestamp)}</Text>
          <Icon name="check_grey" size={14} padding={0} />
        </XStack>
      </View>
    </View>
  )
}

export default Message