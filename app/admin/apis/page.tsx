"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../../../components/admin/AdminLayout';

export default function AdminApis() {
    const [apis, setApis] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchApis();
    }, []);

    const fetchApis = async () => {
        try {
            const response = await axios.get('/api/apis');
            setApis(response.data);
        } catch (error) {
            console.error('Error fetching APIs:', error);
        }
    };

    const requestApi = async (apiId: number) => {
        setLoading(true);
        try {
            const response = await axios.post('/api/request-api', { apiId });
            if (response.data.success) {
                alert('API 요청이 성공했습니다!');
                fetchApis(); // 데이터 새로 고침
            } else {
                alert('API 요청에 실패했습니다.');
            }
        } catch (error) {
            console.error('Error requesting API:', error);
            alert('API 요청 중 오류가 발생했습니다.');
        }
        setLoading(false);
    };

    return (
        <AdminLayout>
            <div className="bg-background text-foreground p-4">
                <h1 className="text-2xl font-bold mb-4">API 관리</h1>
                <table className="min-w-full bg-white border">
                    <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">API 이름</th>
                        <th className="py-2 px-4 border-b">API URL</th>
                        <th className="py-2 px-4 border-b">마지막 요청 날짜</th>
                        <th className="py-2 px-4 border-b">상태</th>
                        <th className="py-2 px-4 border-b">요청</th>
                    </tr>
                    </thead>
                    <tbody>
                    {apis.map((api) => (
                        <tr key={api.id}>
                            <td className="py-2 px-4 border-b">{api.api_name}</td>
                            <td className="py-2 px-4 border-b">{api.api_url}</td>
                            <td className="py-2 px-4 border-b">{new Date(api.last_requested).toLocaleString()}</td>
                            <td className={`py-2 px-4 border-b ${api.last_status === 'Up' ? 'text-green-500' : 'text-red-500'}`}>
                                {api.last_status}
                            </td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
                                    onClick={() => requestApi(api.id)}
                                    disabled={loading}
                                >
                                    요청
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
