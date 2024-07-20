import {
    CircleGauge,
    Code2,
    Map,
    TrendingUp,
    BusFront,
    Users2,
    Navigation,
} from "lucide-react"

import * as React from "react";
import { cn } from "@/lib/utils";

import { Nav } from "./nav"
import { ModeToggle } from "./theme-toggle"
import { Separator } from "@/components/ui/separator"
import { ResizablePanel } from "@/components/ui/resizable";

interface SidebarProps {
    defaultSize: number | 265
    collapsedSize: number
    isCollapsed: boolean
    setIsCollapsed: (collapsed: boolean) => void
}

export default function AdminSidebar({
    defaultSize,
    collapsedSize,
}: SidebarProps) {
    const defaultCollapsed = false
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)

    return (
        <ResizablePanel
            defaultSize={defaultSize}
            collapsedSize={collapsedSize}
            collapsible={true}
            minSize={15}
            maxSize={20}
            onCollapse={(collapsed: any) => {
                setIsCollapsed(collapsed)
                document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                    collapsed
                )}`
            }}
            className={cn(
                isCollapsed &&
                "min-w-[50px] transition-all duration-300 ease-in-out"
            )}
        >
            <div
                className={cn(
                    "flex h-[52px] items-center justify-center",
                    isCollapsed ? "h-[52px]" : "px-2"
                )}
            >
                <ModeToggle isCollapsed={isCollapsed}/>
            </div>
            <Separator/>
            <Nav
                isCollapsed={isCollapsed}
                links={[
                    {title: "대시보드", label: "128", icon: CircleGauge, variant: "default"},
                    {title: "API 연계", label: "9", icon: Code2, variant: "ghost"},
                    {title: "교통안전지도", label: "", icon: Map, variant: "ghost"},
                    {title: "교통안전통계", label: "23", icon: TrendingUp, variant: "ghost"},
                    {title: "대중교통정보", label: "", icon: BusFront, variant: "ghost"},
                ]}
            />
            <Separator/>
            <Nav
                isCollapsed={isCollapsed}
                links={[
                    {title: "고객조회", label: "972", icon: Users2, variant: "ghost"},
                    {title: "이동안전지도", label: "342", icon: Navigation, variant: "ghost"},
                ]}
            />
        </ResizablePanel>
    );
}
