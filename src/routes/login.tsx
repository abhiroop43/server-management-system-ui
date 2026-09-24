import {createFileRoute, Link, useNavigate} from '@tanstack/react-router'
import loginImage from '../assets/login.jpg'
import {Server} from "lucide-react";
import {LoginForm} from "@/components/login-form.tsx";
import React from "react";

export const Route = createFileRoute('/login')({
    validateSearch: (search: Record<string, unknown>) => ({
        redirect: typeof search.redirect === 'string' ? search.redirect : '/',
    }),
    component: Login,
})

function Login() {
    const auth = Route.useRouteContext().auth
    const navigate = useNavigate()
    const {redirect} = Route.useSearch()

    const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const email = formData.get("email") as string
        const password = formData.get("password") as string

        console.log(email, password)

        try {
            await auth.login(email, password)

            await navigate({
                to: redirect,
                replace: true,
            })
        } catch (error) {
            console.error(error)
            // show toast notification
        }
    }

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
                            <LoginForm onSubmit={onSubmit}/>
                        </div>
                    </div>
                </div>
                <div className="relative hidden bg-muted lg:block">
                    <img alt={"login banner"}
                         src={loginImage}
                         className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
            </div>
        </main>
    )
}
