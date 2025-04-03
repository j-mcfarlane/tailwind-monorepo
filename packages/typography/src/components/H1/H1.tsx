import { HTMLAttributes, PropsWithChildren, Ref } from 'react'
import { cva } from 'class-variance-authority'

// Packages
import { cn } from '@base/utils'

// Variants
import { EllipseVariant, HeadingVariantSize, TextColorVariant, WeightVariant, headingVariants } from '@/shared/variants'
const variants = cva(`m-0 p-0 `, headingVariants)

export interface H1Props extends HTMLAttributes<HTMLHeadingElement> {
    ref?: Ref<HTMLHeadingElement>
    color?: TextColorVariant
    ellipse?: EllipseVariant
    size?: HeadingVariantSize
    weight?: WeightVariant
}

export function H1({
    className,
    color = 'inherit',
    ellipse = 'initial',
    size = 'level1',
    weight = 'bold',
    ref,
    children,
    ...rest
}: PropsWithChildren<H1Props>) {
    return (
        <h1 ref={ref} className={cn(variants({ color, ellipse, size, weight, className }))} {...rest}>
            {children}
        </h1>
    )
}
