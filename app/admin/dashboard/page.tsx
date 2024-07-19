import AdminLayout from '../../../components/admin/AdminLayout';

export default function DashboardPage() {
    return (
        <AdminLayout>
            <div className="bg-background text-foreground p-4 rounded shadow">
                <h1 className="text-2xl font-bold mb-4">Dashboard Details</h1>
                <p>Here are some details about the dashboard.</p>
            </div>
        </AdminLayout>
    );
}
