import * as icons from "@/../assets/icon-svgs"
import React, { ComponentProps, forwardRef } from 'react'
import { styled, TamaguiElement, Button as TMButton } from 'tamagui'
import Icon from './Icon'
import { Loader } from "../inc"

const BaseButton = styled(TMButton, {
  px: 20,
  h: 60,
  fontSize: "$6",
  fontFamily: "$body",
  fontWeight: 500,
  flexDirection: "row",
  ai: "center",
  jc: "center",
  lineHeight: 0,
  color: "white",
  variants: {
    type: {
      primary: {
        bg: "$primary",
        borderColor: "$colorTransparent",
        borderWidth: 0,
        width: "auto",
        pressStyle: {
          bg: "$primary",
          borderColor: "$colorTransparent",
          opacity: 0.8
        }
      },
      secondary: {
        bg: "$primary.2",
        borderColor: "$colorTransparent",
        color: "$primary",
        weight: 800,
        width: "auto",
        pressStyle: {
          bg: "$primary.2",
          borderColor: "$colorTransparent",
          opacity: 0.8
        }
      },
      outline: {
        bg: "$colorTransparent",
        borderColor: "$primary",
        color: "$primary",
        width: "auto",
        pressStyle: {
          bg: "$bg.2",
          borderColor: "$colorTransparent",
          opacity: 0.8
        }
      },
      disabled: {
        bg: "$primary",
        borderColor: "$colorTransparent",
        borderWidth: 0,
        color: "$grey.3",
        width: "auto",
        opacity: 0.3,
      },
      light: {
        bg: "$bg.1",
        borderColor: "$colorTransparent",
        color: "$black.0",
        width: "auto",
        pressStyle: {
          bg: "white",
          borderColor: "$colorTransparent",
          opacity: 0.8
        }
      },
      ghost: {
        bg: "$colorTransparent",
        borderColor: "$colorTransparent",
        color: "$black.0",
        width: "auto",
        px: 0,
        py: 0,
        pressStyle: {
          bg: "$backgroundTransparent",
          borderColor: "$colorTransparent",
          opacity: 0.5
        }
      }
    },
    md: {
      true: {}
    },
    sm: {
      true: {
        px: 10,
        h: "$3",
        fontSize: "$4",
      }
    },
    full: {
      true: {
        width: "100%"
      }
    },
    pill: {
      true: {
        br: "$12"
      }
    },
    rounded: {
      sm: {
        br: "$3",
      },
      md: {
        br: "$4",
      },
      lg: {
        br: "$8",
      },
      full: {
        br: "$12"
      },
    },
  } as const,
  defaultVariants: {
    type: "primary"
  },
})

type BaseButtonType = Omit<ComponentProps<typeof BaseButton>, "loading">
interface Props extends BaseButtonType {
  children?: React.ReactNode
  text?: string | number
  iconName?: keyof typeof icons
  isLoading?: boolean
}

const Button = forwardRef<TamaguiElement, Props>(({
  children,
  isLoading,
  text,
  type = "primary",
  iconName,
  ...props
}, ref) => {
  
  return (
    <BaseButton
      type={props.disabled ? "disabled" : type}
      opacity={props.disabled || isLoading ? 0.6 : 1}
      disabled={isLoading ? true : props.disabled}
      {...props}
      ref={ref}
    >
      {iconName && <Icon name={iconName} padding={0} size={20} />}
      {text ? (
        isLoading ? <Loader color="white" /> : text
      ) : (
        isLoading ? <Loader color="white" /> : children
      )}
    </BaseButton>
  )
})

export default Button