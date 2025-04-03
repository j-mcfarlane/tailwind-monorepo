import { extendTailwindMerge } from 'tailwind-merge'

export const twMerge = extendTailwindMerge({
    extend: {
        theme: {
            // We only need to define the custom scale values without the `shadow-` prefix when adding them to the theme object
            text: [
                'body-xs',
                'body-xs',
                'body-xs',
                'body-xs',
                'body-xs',
                'body-xs',
                'body-xs',
                'body-xs',
                'body-xs',
                'body-xs',
                'body-xs',
                'body-xs',
            ],
        },
    },
})
