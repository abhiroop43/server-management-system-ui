import {createFileRoute, redirect} from '@tanstack/react-router'

export const Route = createFileRoute('/lookups-configuration')({
    beforeLoad: ({context, location}) => {
        if (!context.auth.isAuthenticated) {
            throw redirect({
                to: '/login',
                search: {
                    redirect: location.href,
                },
            })
        }
    },
    component: LookupsConfiguration,
})

function LookupsConfiguration() {
    return <div>Hello "/lookups"!</div>
}
