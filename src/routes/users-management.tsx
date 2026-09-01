import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/users-management')({
    component: UsersManagement,
})

function UsersManagement() {
    return <div>Hello "/users"!</div>
}
