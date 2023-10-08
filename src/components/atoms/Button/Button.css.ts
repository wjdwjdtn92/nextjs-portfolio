import { recipe } from '@vanilla-extract/recipes';
import { globalTheme } from '@/styles/globalTheme.css';
import type { RecipeStyleRule } from '@/types/vanillaExtractRecipe.type';

const buttonColorPalette = {
  primary: globalTheme.color.accent,
  secodary: globalTheme.color.blue[600],
  tertiary: globalTheme.color.blue[700]
};

const base: RecipeStyleRule = {
  borderRadius: 12
};

export const button = recipe({
  base,
  variants: {
    variant: {
      outlined: {
        background: globalTheme.color.white,
        color: buttonColorPalette.primary,
        border: `2px solid ${buttonColorPalette.primary}`,

        ':hover': {
          background: globalTheme.color.blue[100],
          color: buttonColorPalette.secodary,
          border: `2px solid ${buttonColorPalette.secodary}`
        },

        ':active': {
          background: globalTheme.color.blue[200],
          color: buttonColorPalette.tertiary,
          border: `2px solid ${buttonColorPalette.tertiary}`
        }
      },
      ghost: {
        background: 'transparent',
        color: buttonColorPalette.primary,
        border: `2px solid transparent`,

        ':hover': {
          color: buttonColorPalette.secodary
        },

        ':active': {
          color: buttonColorPalette.tertiary
        }
      },
      filled: {
        background: buttonColorPalette.primary,
        color: globalTheme.color.white,
        border: `2px solid ${buttonColorPalette.primary}`,

        ':hover': {
          background: buttonColorPalette.secodary,
          border: `2px solid ${buttonColorPalette.secodary}`
        },

        ':active': {
          background: buttonColorPalette.tertiary,
          border: `2px solid ${buttonColorPalette.tertiary}`
        }
      }
    },
    size: {
      small: {
        padding: `${globalTheme.spacing.Spacing[8]} ${globalTheme.spacing.Spacing[16]}`,
        minWidth: '44px',
        minHeight: '44px'
      },
      medium: {
        padding: `${globalTheme.spacing.Spacing[12]} ${globalTheme.spacing.Spacing[20]}`,
        minWidth: '48px',
        minHeight: '48px'
      },
      large: {
        padding: `${globalTheme.spacing.Spacing[16]} ${globalTheme.spacing.Spacing[28]}`,
        minWidth: '52px',
        minHeight: '52px'
      }
    },
    rounded: {
      true: {
        borderRadius: '100%'
      }
    }
  },
  defaultVariants: {
    variant: 'outlined',
    size: 'medium',
    rounded: false
  }
});
