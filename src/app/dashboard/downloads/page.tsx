'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gradients } from '@/lib/data';

interface Request {
  id: string;
  title: string;
  serviceType: string;
  status: string;
  deliverableFiles: string[];
  createdAt: string;
}

export default function DownloadsPage() {
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

  const completedRequests = requests.filter(
    (r) => r.status === 'completed' || r.status === 'delivered'
  );

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[400px]">
        <div className="w-8 h-8 border-4 border-[#7A1E2C] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1A1A2E] mb-2">Downloads</h1>
        <p className="text-[#6B7280]">Download your completed design files</p>
      </div>

      {completedRequests.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-[#E5E0D8]">
          <div className="w-20 h-20 rounded-full bg-[#FAF7F2] flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-2">No files ready for download</h2>
          <p className="text-[#6B7280]">Your completed designs will appear here for download</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {completedRequests.map((request, index) => (
            <motion.div
              key={request.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E0D8]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A2E] mb-1">{request.title}</h3>
                  <p className="text-sm text-[#6B7280] capitalize">
                    {request.serviceType} • Completed {new Date(request.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-3">
                  {request.deliverableFiles.map((file, i) => (
                    <button
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium transition-all hover:scale-105"
                      style={{ background: gradients.hero }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
