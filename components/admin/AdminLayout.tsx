import { ReactNode } from 'react';
import { ThemeProvider } from "@/components/theme-provider"
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from "./AdminFooter";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="grid h-screen w-full pl-[56px] bg-background text-foreground">
                <AdminSidebar/>
                    <div className="flex flex-col">
                        <AdminHeader/>
                        <main className="p-4">
                            {children}
                        </main>
                        <AdminFooter/>
                    </div>
            </div>
        </ThemeProvider>
);
}