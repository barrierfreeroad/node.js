import AdminLayout from '../../components/admin/AdminLayout';

export default function AdminHome() {
    return (
        <AdminLayout>
            <div className="bg-background text-foreground p-4 rounded shadow">
                <h1 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
                <p>This is the main page for admin users.</p>
            </div>
        </AdminLayout>
    );
}
