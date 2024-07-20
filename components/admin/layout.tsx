"use client"

import * as React from "react"
import { ReactNode } from "react"

import { ThemeProvider } from "@/components/theme-provider"

import { ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable"
import { TooltipProvider } from "@/components/ui/tooltip"

import AdminSidebar from "./sidebar";
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
        </ThemeProvider>
    );
}