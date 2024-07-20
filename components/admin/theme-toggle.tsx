"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

import { Moon, Sun, Monitor } from "lucide-react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ModeToggleProps {
    isCollapsed: boolean
}

export function ModeToggle({
    isCollapsed,
}: ModeToggleProps) {
    const { setTheme } = useTheme()
    const themes = [
        { label: "Light", value: "light", icon: <Sun className="h-4 w-4" /> },
        { label: "Dark", value: "dark", icon: <Moon className="h-4 w-4" /> },
        { label: "System", value: "system", icon: <Monitor className="h-4 w-4" /> },
    ]
    const [selectedTheme, setSelectedTheme] = React.useState<string>("system")

    const handleThemeChange = (value: string) => {
        setSelectedTheme(value)
        setTheme(value)
    }

    return (
        <Select defaultValue={selectedTheme} onValueChange={handleThemeChange}>
            <SelectTrigger
                className={cn(
                    "flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
                    isCollapsed &&
                    "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
                )}
                aria-label="Select theme"
            >
                <SelectValue placeholder="Select theme">
                    {themes.find((theme) => theme.value === selectedTheme)?.icon}
                    <span className={cn("ml-2", isCollapsed && "hidden")}>
            {themes.find((theme) => theme.value === selectedTheme)?.label}
          </span>
                </SelectValue>
            </SelectTrigger>
            <SelectContent>
                {themes.map((theme) => (
                    <SelectItem key={theme.value} value={theme.value}>
                        <div className="flex items-center gap-3">
                            {theme.icon}
                            {theme.label}
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
