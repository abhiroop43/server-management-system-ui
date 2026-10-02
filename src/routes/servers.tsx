import {createFileRoute, redirect} from '@tanstack/react-router'
import ServersList from "@/components/servers-list.tsx";
import type {ServerSummary} from "@/models/server-summary.ts";
import {getServersList} from "@/services/server.ts";
import type {ListData} from "@/models/list-data.ts";
import type {ApiResponse} from "@/models/api-response.ts";

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
    loader: async () => {
        const response = await getServersList()
        const data: ApiResponse<ListData<ServerSummary>> = await response.json()

        return data.detail.data.data
    },
    component: Servers,
})

function Servers() {
    const servers = Route.useLoaderData()

    return (
        <div className="p-2">
            <ServersList servers={servers}/>
        </div>
    )
}