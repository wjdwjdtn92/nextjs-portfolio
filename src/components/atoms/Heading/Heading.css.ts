import { recipe } from '@vanilla-extract/recipes';
import { globalTheme } from '@/styles/globalTheme.css';

export const heading = recipe({
  variants: {
    size: {
      ...globalTheme.typography.Heading
    }
  },
  defaultVariants: {
    size: 'Large'
  }
});
