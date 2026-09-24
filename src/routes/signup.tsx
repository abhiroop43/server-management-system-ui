import {createFileRoute, Link} from '@tanstack/react-router'
import {Server} from "lucide-react";
import registerImage from "@/assets/register.jpg";
import {RegisterForm} from "@/components/register-form.tsx";

export const Route = createFileRoute('/signup')({
    component: Signup,
})

function Signup() {
    return (
        <main>
            <div className="grid min-h-svh lg:grid-cols-2">
                <div className="flex flex-col gap-4 p-6 md:p-10">
                    <div className="flex justify-center gap-2 md:justify-start">
                        <Link to={"/"} className="flex items-center gap-2 font-medium">
                            <div
                                className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                                <Server className="size-4"/>
                            </div>
                            Server Mgmt.
                        </Link>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-xs">
                            <RegisterForm/>
                        </div>
                    </div>
                </div>
                <div className="relative hidden bg-muted lg:block">
                    <img alt={"login banner"}
                         src={registerImage}
                         className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
            </div>
        </main>
    )
}
