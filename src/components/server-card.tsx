import {Edit3Icon, Globe2, HardDrive, Server, Trash} from "lucide-react"

import {Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle,} from "@/components/ui/item"
import type {ServerSummary} from "@/models/server-summary.ts";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "@tanstack/react-router";

export interface ServerCardProps {
    server: ServerSummary
}

const ServerCard = ({server}: ServerCardProps) => {
    return (
        <Item key={server.id} className="w-full">
            <ItemMedia variant="icon">
                <Server/>
            </ItemMedia>
            <ItemContent>
                <ItemTitle>{server.name}</ItemTitle>
                <ItemDescription>
                    Hostname: {server.hostName}
                    <br/>
                    Primary IP: {server.primaryIpAddress}
                </ItemDescription>
            </ItemContent>
            <ItemActions>
                <Link to={'/edit-server/$serverId'} params={{serverId: server.id}}>
                    <Button variant={"noShadow"} size="icon" className="rounded-full bg-white">
                        <Edit3Icon className="size-4"/>
                    </Button>
                </Link>

                <Button variant={"noShadow"} size="icon" className="rounded-full bg-red-500 text-white">
                    <Trash className="size-4"/>
                </Button>

                <Button variant={"noShadow"} size="icon" className="rounded-full">
                    <HardDrive className="size-4"/>
                </Button>

                <Button variant={"noShadow"} size="icon" className="rounded-full">
                    <Globe2 className="size-4"/>
                </Button>
            </ItemActions>
        </Item>
    )
}
export default ServerCard
