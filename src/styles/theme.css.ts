import { brandColor, fontSize, fontWeight, spacing } from '@/constants/theme';
import { createTheme } from '@vanilla-extract/css';

export const [themeClass, themeVars] = createTheme({
  color: {
    ...brandColor
  },
  fontSize: {
    ...fontSize
  },
  fontWeight: {
    ...fontWeight
  },
  spacing: {
    ...spacing
  }
});
