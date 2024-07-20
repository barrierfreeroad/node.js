"use client"

import { cookies } from "next/headers"
import Image from "next/image"

import {
    CircleGauge,
    Code2,
    Map,
    TrendingUp,
    BusFront,
    Users2,
    Navigation,
    Search
} from "lucide-react"

import * as React from "react"
import { ReactNode } from "react"
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/admin/theme-toggle";

import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";

interface LayoutProps {
    defaultLayout: number[] | undefined
    defaultCollapsed?: boolean
    navCollapsedSize: number
    children: ReactNode
}

export default function AdminLayout({
    defaultLayout = [265, 440, 655],
    defaultCollapsed = false,
    navCollapsedSize,
    children,
}: LayoutProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="flex flex-col">
                <TooltipProvider delayDuration={0}>
                    <ResizablePanelGroup
                        direction="horizontal"
                        onLayout={(sizes: number[]) => {
                            document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                                sizes
                            )}`
                        }}
                        className="h-full items-stretch"
                    >
                        <AdminSidebar
                            defaultSize={defaultLayout[0]}
                            collapsedSize={navCollapsedSize}
                        />
                        <ResizableHandle withHandle/>
                        {children}
                    </ResizablePanelGroup>
                </TooltipProvider>
            </div>
        </ThemeProvider>
    );
}