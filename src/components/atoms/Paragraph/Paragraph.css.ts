import { recipe } from '@vanilla-extract/recipes';
import { globalTheme } from '@/styles/globalTheme.css';

export const paragraph = recipe({
  variants: {
    size: {
      ...globalTheme.typography.Paragraph
    }
  },
  defaultVariants: {
    size: 'Medium'
  }
});
