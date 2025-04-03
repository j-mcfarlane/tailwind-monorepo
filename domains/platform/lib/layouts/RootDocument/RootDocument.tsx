import { HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning>
            <head>
                <HeadContent />
            </head>
            <body lang="en">
                {children}

                {process.env.NODE_ENV === 'production' && (
                    <>
                        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
                        <TanStackRouterDevtools position="bottom-right" />
                    </>
                )}

                <Scripts />
            </body>
        </html>
    )
}
