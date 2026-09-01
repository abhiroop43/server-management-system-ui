import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/lookups-configuration')({
    component: LookupsConfiguration,
})

function LookupsConfiguration() {
    return <div>Hello "/lookups"!</div>
}
