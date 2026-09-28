"use client"

import {BadgeCheckIcon, BellIcon, CreditCardIcon, LogOutIcon,} from "lucide-react"

import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {logout} from "@/services/auth.ts";

function logoutUser() {
    logout();
    window.location.reload();
}

export function UserAvatar() {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <span className="inline-flex size-9 items-center justify-center rounded-full">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn"/>
                        <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <BadgeCheckIcon/>
                        Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CreditCardIcon/>
                        Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <BellIcon/>
                        Notifications
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator/>
                <DropdownMenuItem onClick={logoutUser}>
                    <LogOutIcon/>
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
