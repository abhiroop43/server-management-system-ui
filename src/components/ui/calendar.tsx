"use client"

import {DayPicker} from "react-day-picker"

import * as React from "react"

import {buttonVariants} from "@/components/ui/button"

import {cn} from "@/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
                      className,
                      classNames,
                      showOutsideDays = true,
                      ...props
                  }: CalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn(
                "rounded-base! border-2 border-border bg-main p-3 font-heading shadow-shadow",
                className,
            )}
            classNames={{
                months: "flex flex-col sm:flex-row gap-2",
                month: "flex flex-col gap-4",

                months_dropdown: "relative",
                years_dropdown: "relative",
                dropdown:
                    "h-8 rounded-base border-2 border-border bg-background px-2 py-1 text-sm font-base text-foreground shadow-shadow outline-none",
                hidden: "sr-only",
                nav: "gap-1 flex items-center",
                button_previous: "absolute left-1",
                button_next: "absolute right-1",

                day: cn(
                    buttonVariants({variant: "noShadow"}),
                    "size-9 p-0 font-base aria-selected:opacity-100",
                ),
                range_start:
                    "day-range-start aria-selected:bg-black! aria-selected:text-white rounded-base",
                range_end:
                    "day-range-end aria-selected:bg-black! aria-selected:text-white rounded-base",
                selected: "bg-black! text-white! rounded-base",
                today: "bg-secondary-background text-foreground!",
                outside:
                    "day-outside text-main-foreground opacity-50 aria-selected:bg-none",
                disabled: "text-main-foreground opacity-50 rounded-base",
                range_middle: "aria-selected:bg-black/50! aria-selected:text-white",
                ...classNames,
            }}
            components={{}}
            {...props}
        />
    )
}

Calendar.displayName = "Calendar"

export {Calendar}