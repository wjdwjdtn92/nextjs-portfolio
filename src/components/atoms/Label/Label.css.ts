import { recipe } from '@vanilla-extract/recipes';
import { globalTheme } from '@/styles/globalTheme.css';

export const label = recipe({
  variants: {
    size: {
      ...globalTheme.typography.Label
    }
  },
  defaultVariants: {
    size: 'Medium'
  }
});
