import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'

// Packages
import { DefaultCatchBoundaryContainer } from '@base/tanstack'

// Root
import { RootDocument, RootLinks, RootMeta } from '@/lib/layouts/index'

// Containers
import { NotFoundContainer } from '@/lib/containers/NotFoundContainer'

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient
}>()({
    head: () => ({
        meta: RootMeta,
        links: RootLinks,
    }),
    errorComponent: (props) => {
        return (
            <RootDocument>
                <DefaultCatchBoundaryContainer {...props} />
            </RootDocument>
        )
    },
    notFoundComponent: () => <NotFoundContainer />,
    component: () => {
        return (
            <RootDocument>
                <Outlet />
            </RootDocument>
        )
    },
})
