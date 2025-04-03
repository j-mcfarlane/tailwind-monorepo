export const EllipseVariant = {
    initial: '',
    truncate: 'truncate',
    clip: 'clip',
} as const

export type EllipseVariant = keyof typeof EllipseVariant
