import {createFileRoute, redirect} from '@tanstack/react-router'

export const Route = createFileRoute('/servers')({
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
    component: Servers,
})

function Servers() {
    return (
        <div className="p-2">
            <h3>Servers List</h3>
        </div>
    )
}