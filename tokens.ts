import { tokens as TMTokens } from '@tamagui/themes';

export const tokens = {
  ...TMTokens,
  color: {
    ...TMTokens.color,
    // primary
    primary: '#E50C00',
    "primary.0.5": "#FFFCFB",
    "primary.1": "#FFF8F6",
    "primary.2": "#FFEAE6",
    "primary.5": "#FEA394",
    "primary.6": "#F78776",
    "primary.7": "#E50C00",
    "primary.9": "#632018",

    // teal
    "teal.3": "#067971",
    "teal.5": "#03302D",
    "teal.4": "#044944",

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
    "grey.6": "#8B8D98",
    "grey.7": "#80828D",
    "grey.8": "#62636C",
    "grey.9": "#1E1F24",

    // input
    "input": "#E4E7EF",
    "input.border": "#6D7280"
  },
  size: {
    ...TMTokens.size,
    true: 16,
    '1/2': '50%',
    full: '100%',
  },
};