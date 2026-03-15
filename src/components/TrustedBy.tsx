'use client';

import { motion } from 'framer-motion';
import { trustedCompanies } from '@/lib/data';

export default function TrustedBy() {
  const duplicatedCompanies = [...trustedCompanies, ...trustedCompanies, ...trustedCompanies, ...trustedCompanies];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#6B7280] font-medium text-lg">Trusted by 450+ innovative companies worldwide</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -50 * 140] }}
              transition={{
                duration: 180,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-14 whitespace-nowrap items-center"
            >
              {duplicatedCompanies.map((company, i) => (
                <motion.div
                  key={`${company.name}-${i}`}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-[#FAF7F2] transition-colors cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white shadow-sm border border-[#E5E0D8] group-hover:shadow-md transition-shadow"
                  >
                    {company.name === 'Stripe' && (
                      <svg viewBox="0 0 60 25" className="w-10 h-10" fill="none">
                        <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.27 4.06-.68v2.31c-1.12.45-2.53.68-4.2.68-3.45 0-5.52-1.8-5.52-5.4 0-3.36 1.87-5.49 5.08-5.49 3.21 0 4.6 2.13 4.6 5.03 0 .34-.02.68-.06 1zm-4.14-2.3c0-.97-.49-1.87-1.64-1.87-1.12 0-1.64.9-1.7 1.87h3.34zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02c.58-.74 1.45-1.23 2.68-1.23.18 0 .36.01.54.02v3.91c-.2-.01-.39-.01-.54-.01zm-6.8-5.42h-4.12v11.19h4.12V14.88zm-2.06-2.48c0-.87-.48-1.38-1.28-1.38-.8 0-1.27.51-1.27 1.38 0 .86.47 1.38 1.27 1.38.8 0 1.28-.52 1.28-1.38zm-7.17-1.62c0-1.4.67-2.46 1.92-2.46 1.18 0 1.78.96 1.78 2.46h-3.7zm-4.12 8.1V5.57h4.12v6.43c0 .83.22 1.41.88 1.41.44 0 .75-.21.95-.58l3.26 1.77c-.6 1.13-1.77 1.93-3.54 1.93-2.52 0-4.67-1.54-4.67-5.54zm-4.35 2.92c.73 0 1.47-.27 2.1-.74l-1.1-2.93c-.37.21-.8.37-1.27.48l2.36-6.32h-4.14l.02 2.63-1.1-.14-.44 1.47h-2.45v3.55h2.1zm-9.14-8.1c0-1.4.67-2.46 1.92-2.46 1.18 0 1.78.96 1.78 2.46H8.3zm-4.21 8.1V5.57h4.12v6.43c0 .83.22 1.41.88 1.41.44 0 .75-.21.95-.58l3.26 1.77c-.6 1.37-1.77 1.93-3.54 1.93-2.52 0-4.67-1.54-4.67-5.54z" fill="#635BFF"/>
                      </svg>
                    )}
                    {company.name === 'Notion' && (
                      <svg viewBox="0 0 120 120" className="w-10 h-10" fill="none">
                        <path d="M97.5 2.1L38.8 96.9c-1.2 1.9-3.8 1.9-5 0L2.1 22.1c-1.2-1.9.3-4.3 2.6-4.3h90.3c2.3 0 3.8 2.4 2.5 4.3z" fill="#000"/>
                        <path d="M97.5 2.1L38.8 96.9c-1.2 1.9-3.8 1.9-5 0L2.1 22.1c-1.2-1.9.3-4.3 2.6-4.3h90.3c2.3 0 3.8 2.4 2.5 4.3z" fill="url(#notion-grad)"/>
                        <path d="M76 98.1c2.3 0 3.8-2.4 2.5-4.3l-42-76.6c-1.2-1.9-3.8-1.9-5 0L2.1 97.9c-1.2 1.9.3 4.3 2.6 4.3h71.3z" fill="#FFF" opacity="0.8"/>
                        <path d="M76 75.8c2.3 0 3.8-2.4 2.5-4.3l-42-76.6c-1.2-1.9-3.8-1.9-5 0L2.1 75.6c-1.2 1.9.3 4.3 2.6 4.3h71.3z" fill="#FFF" opacity="0.6"/>
                        <defs>
                          <linearGradient id="notion-grad" x1="30" y1="30" x2="90" y2="90">
                            <stop offset="0%" stopColor="#FFF"/>
                            <stop offset="100%" stopColor="#FFF" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    )}
                    {company.name === 'Slack' && (
                      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#4A154B"/>
                      </svg>
                    )}
                    {company.name === 'Figma' && (
                      <svg viewBox="0 0 77 116" className="w-10 h-10" fill="none">
                        <path d="M38.5 116C59.21 116 77 98.21 77 77.5v-39c0-20.71-17.79-38.5-38.5-38.5S0 17.79 0 38.5 17.79 116 38.5 116z" fill="#1ABCFE"/>
                        <path d="M38.5 77.5c-10.54 0-19.13-8.59-19.13-19.13V19.13C19.37 8.59 27.96 0 38.5 0c10.54 0 19.13 8.59 19.13 19.13v39.24C57.63 68.91 49.04 77.5 38.5 77.5z" fill="#0ACF83"/>
                        <path d="M0 77.5c0 10.54 8.59 19.13 19.13 19.13h19.37c10.54 0 19.13-8.59 19.13-19.13s-8.59-19.13-19.13-19.13H19.13C8.59 58.37 0 66.96 0 77.5z" fill="#FF7262"/>
                        <path d="M77.5 38.5c0-10.54-8.59-19.13-19.13-19.13h-19.37C20.37 19.37 11.78 28 11.78 38.5S20.37 57.63 30.91 57.63H58.37c10.54 0 19.13-8.59 19.13-19.13z" fill="#F24E1E"/>
                        <path d="M77.5 77.5c0 10.54-8.59 19.13-19.13 19.13H58.37c-10.54 0-19.13-8.59-19.13-19.13s8.59-19.13 19.13-19.13h19.37c10.52 0 19.13 8.59 19.13 19.13z" fill="#A259FF"/>
                      </svg>
                    )}
                    {company.name === 'Webflow' && (
                      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                        <path d="M16.6 4.2c-1.5 0-2.8.7-3.6 1.8-.8-1.1-2.1-1.8-3.6-1.8-2.4 0-4.3 1.9-4.3 4.3 0 .5.1 1 .3 1.4-1.4.8-2.3 2.3-2.3 4 0 2.6 2.1 4.7 4.7 4.7 1.1 0 2.2-.4 3-1.1.6 1.1 1.8 1.8 3.1 1.8 2.1 0 3.8-1.7 3.8-3.8 0-.5-.1-1-.3-1.4 1.4-.8 2.4-2.4 2.4-4.1 0-2.3-1.7-4.1-3.9-4.1h-.2zM12 9.5c.9 0 1.7.8 1.7 1.7s-.8 1.7-1.7 1.7-1.7-.8-1.7-1.7.8-1.7 1.7-1.7z" fill="#146EF5"/>
                      </svg>
                    )}
                    {company.name === 'Framer' && (
                      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                        <path d="M8 2l10 10-10 10" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {company.name === 'Dribbble' && (
                      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#EA4C89"/>
                        <path d="M8.5 14c1.5-1 3.5-1 5 0 .5 2 2 3 2 3s-1.5-2.5-1-4c-1.5.5-3.5 1-5 1zm6-5c-1.5 1-3.5 1-5 0-.5-2-2-3-2-3s1.5 2.5 1 4c1.5-.5 3.5-1 5-1zm-3-5c-1.5 1-3.5 1-5 0-.5-2-2-3-2-3s1.5 2.5 1 4c1.5-.5 3.5-1 5-1zm10 0c1.5-1 3.5-1 5 0 .5 2 2 3 2 3s-1.5-2.5-1-4c-1.5.5-3.5 1-5 1z" fill="#FFF"/>
                      </svg>
                    )}
                    {company.name === 'InVision' && (
                      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.696.065-1.225-.46-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.476-1.635z" fill="#FF3366"/>
                      </svg>
                    )}
                  </div>
                  <span className="text-lg font-semibold text-[#1A1A2E] whitespace-nowrap">{company.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
