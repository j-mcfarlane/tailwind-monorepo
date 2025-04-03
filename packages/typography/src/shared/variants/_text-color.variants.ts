export const TextColorVariant = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    inherit: 'text-inherit',
} as const

export type TextColorVariant = keyof typeof TextColorVariant
