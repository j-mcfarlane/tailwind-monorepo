import { createFileRoute } from '@tanstack/react-router'

// Containers
import { LandingContainer } from '@/lib/containers/LandingContainer'

export const Route = createFileRoute('/')({
    component: LandingContainer,
})
