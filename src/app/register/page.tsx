'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { gradients } from '@/lib/data';

const plans = [
  { id: 'starter', name: 'Starter', price: 299 },
  { id: 'growth', name: 'Growth', price: 499 },
  { id: 'unlimited', name: 'Unlimited', price: 899 },
];

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [plan, setPlan] = useState('growth');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, plan }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: gradients.hero }} />
        
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                width: Math.random() * 150 + 30,
                height: Math.random() * 150 + 30,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col justify-center p-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Start Creating</h1>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of companies transforming their brands with Pixcelvane.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-4xl font-bold">450+</div>
                <div className="text-white/70">Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold">1200+</div>
                <div className="text-white/70">Designs</div>
              </div>
              <div>
                <div className="text-4xl font-bold">98%</div>
                <div className="text-white/70">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-8">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                style={{ background: gradients.hero }}
              >
                P
              </div>
              <span 
                className="text-2xl font-bold"
                style={{
                  background: gradients.hero,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Pixcelvane
              </span>
            </Link>
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-2">Create Account</h2>
            <p className="text-[#6B7280]">Start your 7-day free trial today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] bg-white focus:outline-none focus:ring-2 focus:ring-[#7A1E2C]/20 focus:border-[#7A1E2C] transition-colors"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] bg-white focus:outline-none focus:ring-2 focus:ring-[#7A1E2C]/20 focus:border-[#7A1E2C] transition-colors"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] bg-white focus:outline-none focus:ring-2 focus:ring-[#7A1E2C]/20 focus:border-[#7A1E2C] transition-colors"
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A1A2E] mb-3">
                Choose Your Plan
              </label>
              <div className="grid grid-cols-3 gap-3">
                {plans.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlan(p.id)}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${
                      plan === p.id
                        ? 'border-[#7A1E2C] bg-[#7A1E2C]/5'
                        : 'border-[#E5E0D8] hover:border-[#7A1E2C]/50'
                    }`}
                  >
                    <div className="font-semibold text-[#1A1A2E]">{p.name}</div>
                    <div className="text-sm text-[#6B7280]">${p.price}/mo</div>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: gradients.hero }}
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>

            <p className="text-xs text-center text-[#6B7280]">
              By signing up, you agree to our{' '}
              <a href="#" className="text-[#7A1E2C] underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-[#7A1E2C] underline">Privacy Policy</a>
            </p>
          </form>

          <p className="mt-6 text-center text-[#6B7280]">
            Already have an account?{' '}
            <Link href="/login" className="text-[#7A1E2C] font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
