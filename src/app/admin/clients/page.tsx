'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gradients } from '@/lib/data';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  plan?: string;
  createdAt: string;
}

export default function AdminClientsPage() {
  const [clients, setClients] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/requests', {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      setClients([
        {
          id: 'client-1',
          name: 'John Doe',
          email: 'client@example.com',
          role: 'client',
          plan: 'growth',
          createdAt: new Date().toISOString(),
        },
      ]);
      setLoading(false);
    };

    fetchClients();
  }, []);

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
        <h1 className="text-3xl font-bold text-[#1A1A2E] mb-2">Clients</h1>
        <p className="text-[#6B7280]">Manage your client accounts</p>
      </div>

      <div className="grid gap-4">
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E0D8] flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{ background: gradients.hero }}
              >
                {client.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A2E]">{client.name}</h3>
                <p className="text-sm text-[#6B7280]">{client.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium capitalize bg-[#7A1E2C]/10 text-[#7A1E2C]">
                {client.plan} Plan
              </span>
              <span className="text-sm text-[#6B7280]">
                Joined {new Date(client.createdAt).toLocaleDateString()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
