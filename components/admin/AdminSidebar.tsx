export default function AdminSidebar() {
    return (
        <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
            <nav>
                <ul>
                    <li className="mb-4">
                        <a href="/admin" className="block p-2 hover:bg-gray-700 rounded">Dashboard</a>
                    </li>
                    <li className="mb-4">
                        <a href="/admin/apis" className="block p-2 hover:bg-gray-700 rounded">API 관리</a>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </nav>
        </aside>
    );
}
