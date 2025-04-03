import { Seo } from '@base/tanstack'

export const RootMeta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>[] = [
    {
        charSet: 'utf-8',
    },
    {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
    },
    ...Seo({
        title: 'CODESZN | Code Anything.',
        description:
            'Get premium API access and real-time data insights to grow your business. Use our dashboards to analyze, act, and profit from data-driven decisions.',
    }),
]
