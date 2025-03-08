import { XStack } from "tamagui"
import { Icon } from "../base"
import { YStack } from "tamagui"
import { Text } from "tamagui"

const LocationSuggestion = ({...rest}) => {
  return (
    <XStack gap="$2" ai="center">
      <Icon name="location" bg="$input" size={15} padding={20} />
      <YStack>
        <Text fow="500">{rest?.description}</Text>
        <Text fos="$2">{rest?.structured_formatting?.secondary_text}</Text>
      </YStack>
    </XStack>
  )
}

export default LocationSuggestion