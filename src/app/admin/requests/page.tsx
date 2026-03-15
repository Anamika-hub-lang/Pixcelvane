'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gradients } from '@/lib/data';

interface Request {
  id: string;
  title: string;
  description: string;
  serviceType: string;
  status: string;
  createdAt: string;
}

const statusOptions = ['pending', 'in_progress', 'review', 'completed', 'delivered'];

export default function AdminRequestsPage() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleStatusChange = async (requestId: string, newStatus: string) => {
    const token = localStorage.getItem('token');
    await fetch(`/api/requests/${requestId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status: newStatus }),
    });

    setRequests(requests.map(r => 
      r.id === requestId ? { ...r, status: newStatus } : r
    ));
  };

  const handleAddDeliverable = async (requestId: string) => {
    const token = localStorage.getItem('token');
    await fetch(`/api/requests/${requestId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ deliverableFiles: ['/uploads/deliverable.pdf'] }),
    });

    setShowModal(false);
    setSelectedRequest(null);
  };

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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1A1A2E] mb-2">Manage Requests</h1>
        <p className="text-[#6B7280]">View and manage all client design requests</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-[#E5E0D8] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#FAF7F2]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1A1A2E]">Project</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1A1A2E]">Service</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1A1A2E]">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1A1A2E]">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1A1A2E]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E0D8]">
              {requests.map((request) => (
                <motion.tr
                  key={request.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-[#FAF7F2] transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-[#1A1A2E]">{request.title}</p>
                      <p className="text-sm text-[#6B7280] truncate max-w-xs">{request.description}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="capitalize text-[#1A1A2E]">{request.serviceType}</span>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={request.status}
                      onChange={(e) => handleStatusChange(request.id, e.target.value)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium capitalize border-0 cursor-pointer ${statusColors[request.status]} bg-opacity-50`}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status.replace('_', ' ')}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280]">
                    {new Date(request.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        setSelectedRequest(request);
                        setShowModal(true);
                      }}
                      className="px-4 py-2 rounded-xl text-white text-sm font-medium transition-all hover:scale-105"
                      style={{ background: gradients.hero }}
                    >
                      Upload Deliverable
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {showModal && selectedRequest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">Upload Deliverable</h3>
              <p className="text-[#6B7280] mb-6">
                Upload the final design files for &quot;{selectedRequest.title}&quot;
              </p>
              
              <div className="border-2 border-dashed border-[#E5E0D8] rounded-xl p-8 text-center mb-6">
                <svg className="w-10 h-10 text-[#6B7280] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-[#6B7280]">Click to upload files</p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 rounded-xl border border-[#E5E0D8] text-[#6B7280] font-medium hover:bg-[#FAF7F2] transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleAddDeliverable(selectedRequest.id)}
                  className="flex-1 px-6 py-3 rounded-xl text-white font-medium transition-all hover:scale-105"
                  style={{ background: gradients.hero }}
                >
                  Upload
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
