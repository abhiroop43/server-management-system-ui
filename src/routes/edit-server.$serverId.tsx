import {createFileRoute, redirect} from '@tanstack/react-router'

export const Route = createFileRoute('/edit-server/$serverId')({
    params: {
        parse: ({serverId}: { serverId: string }) => {
            return {serverId: serverId}
        },
        stringify: ({serverId}) => ({serverId: String(serverId)}),
    },
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
    component: RouteComponent,
})

function RouteComponent() {
    const {serverId} = Route.useParams()
    return <div>Hello {serverId}</div>
}