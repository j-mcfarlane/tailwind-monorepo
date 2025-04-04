import { extendTailwindMerge } from 'tailwind-merge'

// Create our own twMerge function based on our own Tailwind theme configuration.
const twMerge = extendTailwindMerge({
    override: {
        theme: {
            // Colors. Though your Tailwind config uses `--text-color` and not `--color`,
            // this shouldn't cause any conflicts since they all still use the same keys.
            color: [
                'primary',
                'secondary',
                // Also add the extra background colors for completeness.
                'tertiary',
                'quaternary',
                // For `text-inherit`.
                'inherit',
            ],
            // Font size. Directly correlates to the `--text` namespace of theme values.
            text: [
                'body-xs',
                'body-sm',
                'body-md',
                'body-lg',
                'body-xl',
                'heading-level1',
                'heading-level2',
                'heading-level3',
                'heading-level4',
                'heading-level5',
                'heading-level6',
            ]
        }
    },
});

export function cn(...inputs: (string | undefined | false | null)[]) {
    return twMerge(inputs.filter(Boolean).join(' '))
}
