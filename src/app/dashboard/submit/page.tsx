'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { gradients, services } from '@/lib/data';

export default function SubmitRequestPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description, serviceType }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit request');
      }

      router.push('/dashboard/requests');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1A1A2E] mb-2">Submit Design Request</h1>
        <p className="text-[#6B7280]">Tell us what you need and we will bring your vision to life</p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E0D8] space-y-6"
      >
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Project Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] bg-white focus:outline-none focus:ring-2 focus:ring-[#7A1E2C]/20 focus:border-[#7A1E2C] transition-colors"
            placeholder="e.g., Website Redesign for Landing Page"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Service Type
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setServiceType(service.id)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  serviceType === service.id
                    ? 'border-[#7A1E2C] bg-[#7A1E2C]/5'
                    : 'border-[#E5E0D8] hover:border-[#7A1E2C]/50'
                }`}
              >
                <div className="font-medium text-[#1A1A2E] text-sm">{service.title}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Project Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] bg-white focus:outline-none focus:ring-2 focus:ring-[#7A1E2C]/20 focus:border-[#7A1E2C] transition-colors resize-none"
            placeholder="Describe your project in detail. Include your goals, target audience, preferred colors, style preferences, and any specific requirements..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Reference Files (Optional)
          </label>
          <div className="border-2 border-dashed border-[#E5E0D8] rounded-xl p-8 text-center hover:border-[#7A1E2C]/50 transition-colors cursor-pointer">
            <svg className="w-10 h-10 text-[#6B7280] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-[#6B7280] mb-1">Drag and drop files here, or click to browse</p>
            <p className="text-xs text-[#9CA3AF]">PNG, JPG, PDF, Figma files up to 10MB</p>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-3 rounded-xl border border-[#E5E0D8] text-[#6B7280] font-medium hover:bg-[#FAF7F2] transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading || !serviceType}
            className="flex-px-6 py-3 rounded-xl text-white font-medium transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex-1"
            style={{ background: gradients.hero }}
          >
            {loading ? 'Submitting...' : 'Submit Request'}
          </button>
        </div>
      </motion.form>
    </div>
  );
}
