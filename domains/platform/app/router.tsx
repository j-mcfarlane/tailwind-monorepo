import { QueryClient } from '@tanstack/react-query'
import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routerWithQueryClient } from '@tanstack/react-router-with-query'

// Packages
import { DefaultCatchBoundaryContainer } from '@base/tanstack'

// Route Gen
import { routeTree } from './routeTree.gen'

// Containers
import { NotFoundContainer } from '@/lib/containers/index'

export function createRouter() {
    const queryClient = new QueryClient()

    return routerWithQueryClient(
        createTanStackRouter({
            routeTree,
            context: {
                queryClient,
            },
            defaultPreload: 'intent',
            defaultErrorComponent: DefaultCatchBoundaryContainer,
            defaultNotFoundComponent: () => <NotFoundContainer />,
        }),
        queryClient,
    )
}

declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createRouter>
    }
}
