import type {ServerSummary} from "@/models/server-summary.ts";
import ServerCard from "@/components/server-card.tsx";
import {ItemGroup} from "@/components/ui/item.tsx";

export interface ServersListProps {
    servers: ServerSummary[]
}

const ServersList = ({servers}: ServersListProps) => {
    return (
        <ItemGroup className="max-w-sm">
            {servers.map(server => (
                <ServerCard server={server} key={server.id}/>
            ))}
        </ItemGroup>
    )
}
export default ServersList
