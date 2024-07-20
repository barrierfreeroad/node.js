import { cookies } from "next/headers"
import AdminLayout from '@/components/admin/layout';

import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export default function AdminPage() {
    const layout = cookies().get("react-resizable-panels:layout")
    const collapsed = cookies().get("react-resizable-panels:collapsed")

    const defaultLayout = layout ? JSON.parse(layout.value) : undefined
    const defaultCollapsed = collapsed && collapsed.value && collapsed.value !== 'undefined'
        ? JSON.parse(collapsed.value)
        : undefined;

    return (
        <AdminLayout
            defaultLayout={defaultLayout}
            defaultCollapsed={defaultCollapsed}
            navCollapsedSize={4}
        >
            <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
                <div className="bg-background text-foreground p-4 rounded shadow">
                    <h1 className="text-2xl font-bold mb-4">Dashboard Details</h1>
                    <p>Here are some details about the dashboard.</p>
                </div>
            </ResizablePanel>
        </AdminLayout>
    );
}