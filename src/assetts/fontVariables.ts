import {TextStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

enum fontTypes {
  body = 'body',
  label = 'label',
  title = 'title',
  headline = 'headline',
  display = 'display',
}

type fontSizes = 'small' | 'medium' | 'large';

type fontVariablesType = {
  [key in fontTypes]: {
    [sizeKey in fontSizes]: TextStyle;
  };
};

export const fontVariables: fontVariablesType = {
  body: {
    small: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 'normal',
      letterSpacing: 0.4,
    },
    medium: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: 'normal',
      letterSpacing: 0.25,
    },
    large: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 'normal',
      letterSpacing: 0.15,
    },
  },
  label: {
    small: {
      fontSize: 11,
      lineHeight: 16,
      fontWeight: 'bold',
      letterSpacing: 0.4,
    },
    medium: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 'bold',
      letterSpacing: 0.4,
    },
    large: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: 'bold',
      letterSpacing: 0.1,
    },
  },
  title: {
    small: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: 'bold',
      letterSpacing: 0.1,
    },
    medium: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 'bold',
      letterSpacing: 0.15,
    },
    large: {
      fontSize: 22,
      lineHeight: 28,
      fontWeight: 'bold',
      letterSpacing: 0,
    },
  },
  headline: {
    small: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 'bold',
      letterSpacing: 0,
    },
    medium: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: 'bold',
      letterSpacing: 0,
    },
    large: {
      fontSize: 32,
      lineHeight: 40,
      fontWeight: 'bold',
      letterSpacing: 0,
    },
  },
  display: {
    small: {
      fontSize: 36,
      lineHeight: 38,
      fontWeight: 'bold',
      letterSpacing: 0,
    },
    medium: {
      fontSize: 45,
      lineHeight: 46,
      fontWeight: 'bold',
      letterSpacing: 0,
    },
    large: {
      fontSize: 57,
      lineHeight: 64,
      fontWeight: 'bold',
      letterSpacing: 0,
    },
  },
};
