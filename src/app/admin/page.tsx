'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gradients } from '@/lib/data';

interface Request {
  id: string;
  title: string;
  serviceType: string;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      
      const requestsRes = await fetch('/api/requests', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const requestsData = await requestsRes.json();
      setRequests(requestsData.requests || []);
      setClients(1);
    };

    fetchData();
  }, []);

  const pendingCount = requests.filter(r => r.status === 'pending').length;
  const inProgressCount = requests.filter(r => r.status === 'in_progress').length;
  const completedCount = requests.filter(r => r.status === 'completed' || r.status === 'delivered').length;

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    in_progress: 'bg-blue-100 text-blue-800',
    review: 'bg-purple-100 text-purple-800',
    completed: 'bg-green-100 text-green-800',
    delivered: 'bg-[#7A1E2C] text-white',
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1A1A2E] mb-2">Admin Dashboard</h1>
        <p className="text-[#6B7280]">Manage your design agency operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E0D8]"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7A1E2C] to-[#FF6B35] flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-[#1A1A2E]">{clients}</p>
          <p className="text-[#6B7280]">Total Clients</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E0D8]"
        >
          <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-[#1A1A2E]">{pendingCount}</p>
          <p className="text-[#6B7280]">Pending Requests</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E0D8]"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-[#1A1A2E]">{inProgressCount}</p>
          <p className="text-[#6B7280]">In Progress</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E0D8]"
        >
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-[#1A1A2E]">{completedCount}</p>
          <p className="text-[#6B7280]">Completed</p>
        </motion.div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-[#E5E0D8] overflow-hidden">
        <div className="p-6 border-b border-[#E5E0D8] flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#1A1A2E]">Recent Requests</h2>
          <Link
            href="/admin/requests"
            className="text-[#7A1E2C] font-medium hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="divide-y divide-[#E5E0D8]">
          {requests.slice(0, 5).map((request) => (
            <div key={request.id} className="p-6 flex items-center justify-between hover:bg-[#FAF7F2] transition-colors">
              <div>
                <h3 className="font-semibold text-[#1A1A2E]">{request.title}</h3>
                <p className="text-sm text-[#6B7280] capitalize">{request.serviceType} • {new Date(request.createdAt).toLocaleDateString()}</p>
              </div>
              <span className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize ${statusColors[request.status] || 'bg-gray-100 text-gray-800'}`}>
                {request.status.replace('_', ' ')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
