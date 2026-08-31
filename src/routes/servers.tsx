import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/servers')({
    component: Servers,
})

function Servers() {
    return (
        <div className="p-2">
            <h3>Servers List</h3>
        </div>
    )
}