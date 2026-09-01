import {type LucideIcon} from "lucide-react"

import {SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem,} from "@/components/ui/sidebar"
import {Link, useMatchRoute} from "@tanstack/react-router"
import type {FileRouteTypes} from "@/routeTree.gen";

export function NavMain({
                            items,
                        }: Readonly<{
    items: {
        title: string
        url: FileRouteTypes["to"]
        icon?: LucideIcon
        isActive?: boolean
    }[]
}>) {

    const matchRoute = useMatchRoute()

    return (
        <SidebarGroup>
            <SidebarMenu>
                {items.map((item) => {
                    const isActive = !!matchRoute({to: item.url})

                    return (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={isActive} className={
                                isActive
                                    ? "rounded-full border-2 border-border bg-main text-main-foreground hover:bg-main hover:text-main-foreground"
                                    : "hover:bg-background"
                            }>
                                <Link to={item.url}>
                                    {item.title}
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    )
}
