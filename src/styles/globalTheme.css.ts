import { brandColor, fontSize, fontWeight, spacing } from '@/constants/theme';
import { createGlobalTheme } from '@vanilla-extract/css';
import global from '@/tokens/global.json';

export const globalTheme = createGlobalTheme('html', {
  ...global
});
