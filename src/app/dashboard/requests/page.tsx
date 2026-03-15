'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gradients } from '@/lib/data';

interface Request {
  id: string;
  title: string;
  description: string;
  serviceType: string;
  status: string;
  createdAt: string;
  deliverableFiles: string[];
}

export default function RequestsPage() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/requests', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setRequests(data.requests || []);
      setLoading(false);
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

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[400px]">
        <div className="w-8 h-8 border-4 border-[#7A1E2C] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#1A1A2E] mb-2">My Requests</h1>
          <p className="text-[#6B7280]">Track all your design requests in one place</p>
        </div>
        <Link
          href="/dashboard/submit"
          className="px-6 py-3 rounded-xl text-white font-medium transition-all hover:scale-105"
          style={{ background: gradients.hero }}
        >
          New Request
        </Link>
      </div>

      {requests.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-[#E5E0D8]">
          <div className="w-20 h-20 rounded-full bg-[#FAF7F2] flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-2">No requests yet</h2>
          <p className="text-[#6B7280] mb-6">Submit your first design request to get started</p>
          <Link
            href="/dashboard/submit"
            className="inline-block px-6 py-3 rounded-xl text-white font-medium"
            style={{ background: gradients.hero }}
          >
            Submit Your First Request
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((request, index) => (
            <motion.div
              key={request.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E0D8] hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-[#1A1A2E]">{request.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${statusColors[request.status] || 'bg-gray-100 text-gray-800'}`}>
                      {request.status.replace('_', ' ')}
                    </span>
                  </div>
                  <p className="text-[#6B7280] mb-3">{request.description}</p>
                  <div className="flex items-center gap-4 text-sm text-[#6B7280]">
                    <span className="capitalize">{request.serviceType}</span>
                    <span>•</span>
                    <span>{new Date(request.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                {request.deliverableFiles.length > 0 && (
                  <div className="ml-4">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-50 text-green-700 text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Ready
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
