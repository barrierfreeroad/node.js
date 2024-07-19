"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/admin/AdminLayout';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

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
            <h1 className="text-2xl font-bold mb-4">API 관리</h1>
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
                    {apis.map((api) => (
                        <TableRow key={api.id}>
                            <TableCell>{api.api_name}</TableCell>
                            <TableCell>{api.api_url}</TableCell>
                            <TableCell>
                                {new Date(api.last_requested).toLocaleString()}
                            </TableCell>
                            <TableCell className={`${api.last_status === 'Up' ? 'text-green-500' : 'text-red-500'}`}>
                                {api.last_status}
                            </TableCell>
                            <TableCell>
                                <Button
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
                                    onClick={() => requestApi(api.id)}
                                    disabled={loading}
                                >
                                    요청
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </AdminLayout>
    );
}
