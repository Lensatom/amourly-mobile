import { ComponentProps, forwardRef, useState } from "react";
import { Input as TMInput, Text, View, YStack, styled } from "tamagui";
import { Button } from ".";

const BaseInput = styled(TMInput, {
  w: "100%",
  h: "$5",
  fontSize: 14,
  px: 20,
  py: "$4",
  br: "$2",
  color: "$black.0",
  fontWeight: "400",
  placeholderTextColor: "$grey.2",
  variants: {
    type: {
      outline: {
        backgroundColor: "$backgroundTransparent",
        borderColor: "$input",
        outlineColor: "$input",
        borderWidth: 1,
        focusStyle: {
          borderColor: "black"
        },
      },
      ghost: {
        backgroundColor: "$colorTransparent",
        borderColor: "$backgroundTransparent",
        focusStyle: {
          borderColor: "$primary"
        }
      }
    },
    rounded: {
      full: {
        br: 9999
      }
    },
    error: {
      true: {
        borderColor: "$error"
      }
    }
  } as const,
  defaultVariants: {
    type: "outline"
  }
})

type BaseInputType = ComponentProps<typeof BaseInput>
interface Props extends BaseInputType {
  label?: string,
  hash?: boolean,
  phone?: boolean
}

const Input = forwardRef<any, Props>(({label, phone, hash:h, onChangeText, ...props}, ref) => {

  const [hash, setHash] = useState<boolean | null>(h ? h : null)

  const toggleHash = () => {
    setHash(prev => !prev)
  }

  const onChangePhone = (value:string) => {
    if (!onChangeText) return

    if (value.length === 1 && value !== "0") {
      onChangeText(`${value}`)
    } else {
      onChangeText(value)
    }
  }

  return (
    <YStack onTouchStart={(e) => e.stopPropagation()} w="$full" gap="$2" position="relative">
      {label && <Text>{label}</Text>}

      {phone && (
        <View position="absolute" top={52} borderColor="$grey.2" borderRightWidth={1} pl="$3" pr="$3">
          <Text opacity={0.8}>+234</Text>
        </View>
      )}
      
      <BaseInput
        ref={ref}
        secureTextEntry={!!hash}
        // cursorColor={tokens.color["black.0"]}
        paddingLeft={phone && 68}
        onChangeText={phone ? (value) => onChangePhone(value) : onChangeText}
        w="$full"
        {...props}
      />
      
      {hash !== null && (
        <View position="absolute" right="$2" top={44} bg="$white" px="$2">
          <Button type="ghost" onPress={toggleHash}>
            {hash ? <Text>See</Text> : <Text>Hide</Text>}
          </Button>
        </View>
      )}
      
      {/* <Text pl="$4">{error}</Text> */}
    </YStack>
  )
})

export default Input