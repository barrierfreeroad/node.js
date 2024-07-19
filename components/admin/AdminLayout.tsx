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
            <div className="flex h-screen bg-background text-foreground">
                <AdminSidebar />
                <div className="flex flex-col flex-1">
                    <AdminHeader />
                    <main className="p-4">
                        {children}
                    </main>
                    <AdminFooter />
                </div>
            </div>
        </ThemeProvider>
    );
}