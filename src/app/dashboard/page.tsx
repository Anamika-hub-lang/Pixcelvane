'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gradients } from '@/lib/data';

interface Request {
  id: string;
  title: string;
  serviceType: string;
  status: string;
  createdAt: string;
  deliverableFiles: string[];
}

export default function DashboardOverview() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const fetchRequests = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/requests', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setRequests(data.requests || []);
    };

    fetchRequests();
  }, []);

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    in_progress: 'bg-blue-100 text-blue-800',
    review: 'bg-purple-100 text-purple-800',
    completed: 'bg-green-100 text-green-800',
    delivered: 'bg-[#7A1E2C] text-white',
  };

  const pendingCount = requests.filter(r => r.status === 'pending').length;
  const inProgressCount = requests.filter(r => r.status === 'in_progress').length;
  const completedCount = requests.filter(r => r.status === 'completed' || r.status === 'delivered').length;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1A1A2E] mb-2">
          Welcome back, {user?.name || 'Client'}!
        </h1>
        <p className="text-[#6B7280]">Here is an overview of your design requests</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E0D8]"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-[#1A1A2E]">{pendingCount}</p>
          <p className="text-[#6B7280]">Pending Requests</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E0D8]"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-[#1A1A2E]">{inProgressCount}</p>
          <p className="text-[#6B7280]">In Progress</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E0D8]"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl" style={{ background: gradients.card }}>
              <svg className="w-6 h-6 text-[#7A1E2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-[#1A1A2E]">{completedCount}</p>
          <p className="text-[#6B7280]">Completed</p>
        </motion.div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-[#E5E0D8] overflow-hidden">
        <div className="p-6 border-b border-[#E5E0D8]">
          <h2 className="text-xl font-bold text-[#1A1A2E]">Recent Requests</h2>
        </div>
        
        {requests.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#FAF7F2] flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <p className="text-[#6B7280] mb-4">No design requests yet</p>
            <a href="/dashboard/submit" className="inline-block px-6 py-3 rounded-xl text-white font-medium" style={{ background: gradients.hero }}>
              Submit Your First Request
            </a>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}
