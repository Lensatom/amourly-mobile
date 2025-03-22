import { Image } from "react-native";
import { View, YStack } from "tamagui";

interface Props {
  url: string | null;
  size?: number;
}

const Avatar = ({
  url,
  size=50
}:Props) => {
  return (
    <YStack jc="center" ai="center" width={size} height={size} borderRadius={99} overflow="hidden" bg="$white.1">
      <View bg="$grey.3" w="$full" h="$full" br={99} overflow="hidden">
        {!!url ? (
          <Image source={{uri:url}} style={{width: "100%", height: "100%", resizeMode: "cover"}} />
        ) : (
          <></>
        )}
      </View>
    </YStack>
  )
}

export default Avatar