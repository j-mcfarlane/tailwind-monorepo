import { EllipseVariant } from './_ellipse.variant'
import { TextColorVariant } from './_text-color.variants'
import { WeightVariant } from './_weight.variant'

export const HeadingVariantSize = {
    level1: 'text-heading-level1 leading-heading-level1',
    level2: 'text-heading-level2 leading-heading-level2',
    level3: 'text-heading-level3 leading-heading-level3',
    level4: 'text-heading-level4 leading-heading-level4',
    level5: 'text-heading-level5 leading-heading-level5',
    level6: 'text-heading-level6 leading-heading-level6',
} as const

export type HeadingVariantSize = keyof typeof HeadingVariantSize

export interface HeadingVariants {
    variants: {
        color: typeof TextColorVariant
        ellipse: typeof EllipseVariant
        size: typeof HeadingVariantSize
        weight: typeof WeightVariant
    }
}

export const headingVariants: HeadingVariants = {
    variants: {
        color: TextColorVariant,
        ellipse: EllipseVariant,
        size: HeadingVariantSize,
        weight: WeightVariant,
    },
} as const
