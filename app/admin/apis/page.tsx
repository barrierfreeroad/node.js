import { cookies } from "next/headers"
import AdminLayout from '@/components/admin/layout';

import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"

export default function AdminApis() {
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
                <Tabs defaultValue="all">
                    <div className="flex items-center px-4 py-2">
                        <h1 className="text-xl font-bold">API 관리</h1>
                        <TabsList className="ml-auto">
                            <TabsTrigger
                                value="all"
                                className="text-zinc-600 dark:text-zinc-200"
                            >
                                All mail
                            </TabsTrigger>
                            <TabsTrigger
                                value="unread"
                                className="text-zinc-600 dark:text-zinc-200"
                            >
                                Unread
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <Separator />
                    <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <form>
                            <div className="relative">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="Search" className="pl-8" />
                            </div>
                        </form>
                    </div>
                    <TabsContent value="all" className="m-0">

                    </TabsContent>
                    <TabsContent value="unread" className="m-0">

                    </TabsContent>
                </Tabs>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={defaultLayout[2]}>
                <Table>
                    <TableCaption>API 관리</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>API 이름</TableHead>
                            <TableHead>API URL</TableHead>
                            <TableHead>마지막 요청 날짜</TableHead>
                            <TableHead>상태</TableHead>
                            <TableHead>요청</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                    </TableBody>
                </Table>
            </ResizablePanel>
        </AdminLayout>
    );
}
