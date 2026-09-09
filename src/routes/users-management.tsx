import {createFileRoute, redirect} from '@tanstack/react-router'

export const Route = createFileRoute('/users-management')({
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
    component: UsersManagement,
})

function UsersManagement() {
    return <div>Hello "/users"!</div>
}
