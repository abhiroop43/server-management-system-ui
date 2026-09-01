import * as React from "react"
import {MoonStar, Server, Sun} from "lucide-react"

import {NavMain} from "@/components/nav-main"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import {Link} from "@tanstack/react-router";
import type {FileRouteTypes} from "@/routeTree.gen";
import {Button} from "@/components/ui/button.tsx";
import {useTheme} from "@/components/theme-provider"

const data: {
    navMain: {
        title: string
        url: FileRouteTypes["to"]
    }[]
} = {
    navMain: [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "Servers",
            url: "/servers",
        },
        {
            title: "User Management",
            url: "/users-management",
        },
        {
            title: "Lookups Configuration",
            url: "/lookups-configuration",
        },
    ],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    const {setTheme} = useTheme()

    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link to="/">
                                <div
                                    className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Server className="size-4"/>
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-medium">Server Mgmt</span>
                                    <span className="">v1.0.0</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="bg-background">
                <NavMain items={data.navMain}/>
            </SidebarContent>
            <SidebarFooter>
                <div className={'flex justify-between'}>
                    <Button variant={'neutral'} onClick={() => setTheme("light")}><Sun/> Light</Button>
                    <Button onClick={() => setTheme("dark")}><MoonStar/> Dark</Button>
                </div>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
