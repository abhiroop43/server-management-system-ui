import {cn} from "cn"

import {Button} from "@/components/ui/button"
import {Field, FieldDescription, FieldGroup, FieldLabel,} from "@/components/ui/field"
import {Input} from "@/components/ui/input"
import {Link} from "@tanstack/react-router";
import * as React from "react";
import {Popover, PopoverContent, PopoverTrigger} from "./ui/popover";
import {CalendarIcon} from "lucide-react";
import {Calendar} from "@/components/ui/calendar.tsx";
import {format} from 'date-fns'

export function RegisterForm({
                                 className,
                                 ...props
                             }: React.ComponentProps<"form">) {

    const [date, setDate] = React.useState<Date>()
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold">Login to your account</h1>
                    <p className="text-sm text-balance text-muted-foreground">
                        Enter your email below to login to your account
                    </p>
                </div>
                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input id="email" type="email" placeholder="m@example.com" required/>
                </Field>
                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" type="password" placeholder="**********" required/>
                </Field>
                <Field>
                    <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                    <Input id="confirmPassword" type="password" placeholder="**********" required/>
                </Field>
                <Field>
                    <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                    <Input id="firstName" type="text" placeholder="John" required/>
                </Field>
                <Field>
                    <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                    <Input id="lastName" type="text" placeholder="Wick" required/>
                </Field>

                <Field>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="noShadow"
                                className="w-[280px] justify-start text-left font-base"
                            >
                                <CalendarIcon/>
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto border-0! p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </Field>

                <Field>
                    <Button type="submit">Sign Up</Button>
                </Field>
                <Field>

                    <FieldDescription className="text-center">
                        Already have an account?{" "}
                        <Link to={"/login"} className="underline underline-offset-4">
                            Login
                        </Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    )
}
