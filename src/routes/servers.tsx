import {createFileRoute, redirect} from '@tanstack/react-router'
import ServersList from "@/components/servers-list.tsx";
import {useEffect, useState} from "react";
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
    component: Servers,
})

function Servers() {
    const [servers, setServers] = useState<ServerSummary[]>([])


    useEffect(
        () => {
            getServersList()
                .then(response => response.json())
                .then((data: ApiResponse<ListData<ServerSummary>>) => {
                    console.log(data);
                    setServers(data.detail.data.data);
                })
        },
        []
    )

    return (
        <div className="p-2">
            <ServersList servers={servers}/>
        </div>
    )
}