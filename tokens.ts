import { tokens as TMTokens } from '@tamagui/themes';

export const tokens = {
  ...TMTokens,
  color: {
    ...TMTokens.color,
    // primary
    primary: '#E50C00',
    "primary.2": "#FFEAE6",
    "primary.5": "#FEA394",

    // danger
    danger: '#DF2126',

    // bg
    "bg.1": "#FFFCFB",

    // black
    "black": "#000000",

    // greys
    "grey.1": "#727070",
    "grey.2": "##B2B3BD",
    "grey.3": "#EFF0F3",
    "grey.4": "#EEF1F5",
    "grey.5": "#CDCED7",
    "grey.8": "#62636C",
    "grey.9": "#1E1F24",

    // input
    "input": "#E4E7EF",
    "input.border": "#E8EBEA"
  },
  size: {
    ...TMTokens.size,
    true: 16,
    '1/2': '50%',
    full: '100%',
  },
};