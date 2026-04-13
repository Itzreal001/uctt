import { Link } from 'wouter';
import { CalendarDays, ClipboardList, GraduationCap, HeartHandshake, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function Admissions() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="relative bg-[#003366] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,165,116,0.25),_transparent_35%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-sm text-[#d4a574] mb-4">Admissions</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">A straightforward admissions experience for future UCT students.</h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl">
              Apply to our world-class programmes, explore funding options, and find the support you need to join one of Africa’s most respected universities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/register">
                <Button className="bg-[#d4a574] hover:bg-[#c9a961] text-white">Start Your Application</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">Why UCT?</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <div className="grid gap-8">
              <div className="rounded-3xl border border-gray-200 p-10 shadow-sm">
                <h2 className="text-3xl font-semibold text-[#003366] mb-4">Key admissions deadlines</h2>
                <ul className="space-y-6">
                  {[
                    { label: 'Undergraduate applications', date: 'June 1, 2026' },
                    { label: 'Postgraduate applications', date: 'July 15, 2026' },
                    { label: 'Scholarship review deadline', date: 'May 20, 2026' },
                  ].map((item) => (
                    <li key={item.label} className="flex flex-col gap-2 rounded-3xl border border-gray-200 bg-white p-6">
                      <span className="text-sm uppercase tracking-[0.3em] text-[#d4a574]">{item.label}</span>
                      <p className="text-2xl font-semibold text-[#003366]">{item.date}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    icon: ClipboardList,
                    title: 'Application checklist',
                    description: 'Complete your application with transcripts, references, and programme-specific materials.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Visa & relocation support',
                    description: 'International students get assistance with visas, accommodation and orientation.',
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-gray-200 bg-[#f7f9fc] p-8 shadow-sm">
                    <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-2xl bg-[#003366] text-white">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#003366] mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-[#f7f9fc] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5 text-[#003366]">
                <GraduationCap className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Why apply to UCT?</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our applicants benefit from a strong academic brand, extensive career networks, and a campus culture that supports innovation, leadership and social impact.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5 text-[#003366]">
                <HeartHandshake className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Scholarships & funding</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Explore merit-based, need-based and research scholarships available for both South African and international learners.
              </p>
              <Link href="#" className="text-[#003366] font-semibold hover:text-[#d4a574]">
                View funding options →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#003366] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Need help with your application?</h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Our admissions team is ready to help with questions about entry requirements, supporting documents, and next steps.
            </p>
            <Link href="/register">
              <Button className="bg-[#d4a574] hover:bg-[#c9a961] text-white">Start Your Application</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
