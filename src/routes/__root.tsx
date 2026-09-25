import {createRootRouteWithContext, Outlet, useMatches} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools'
import {AppSidebar} from "@/components/app-sidebar.tsx";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {UserAvatar} from "@/components/user-avatar.tsx";
import {ThemeProvider} from "@/components/theme-provider"

const RootLayout = () => {

    const matches = useMatches()

    // Get the ID of the lowest/current leaf route
    const currentRouteId = matches.at(-1)?.routeId
    let routeName = '';


    const context = Route.useRouteContext()

    if (currentRouteId === "/") {
        routeName = 'Home';
    } else if (currentRouteId === '/servers') {
        routeName = 'Servers';
    } else if (currentRouteId === '/users-management') {
        routeName = 'Users Management';
    } else if (currentRouteId === '/lookups-configuration') {
        routeName = 'Lookups Configuration';
    }


    return (context.auth.isAuthenticated ?
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <SidebarProvider>
                    <AppSidebar/>
                    <SidebarInset>
                        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                            <SidebarTrigger className="-ml-1"/>
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="/">Server Management</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block"/>
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>{routeName}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                            <div className={'ml-auto w-fit'}>
                                <UserAvatar/>
                            </div>
                        </header>
                        <div className="flex flex-1 flex-col gap-4 p-4">
                            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                                <div className="aspect-video rounded-xl bg-muted/50"/>
                                <div className="aspect-video rounded-xl bg-muted/50"/>
                                <div className="aspect-video rounded-xl bg-muted/50"/>
                            </div>
                            <div className="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min">
                                <main>
                                    <Outlet/>
                                    {/*<TanStackRouterDevtools/>*/}
                                </main>
                            </div>
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </ThemeProvider> : (<>
                <Outlet/>
                <TanStackRouterDevtools/>
            </>)
    );
}

interface AuthState {
    isAuthenticated: boolean
    user: { id: string; username: string; email: string } | null
    login: (username: string, password: string) => Promise<void>
    logout: () => void
}

interface MyRouterContext {
    auth: AuthState
}

export const Route = createRootRouteWithContext<MyRouterContext>()({component: RootLayout})