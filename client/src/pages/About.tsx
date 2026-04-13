import { Link } from 'wouter';
import { Award, Globe2, GraduationCap, HeartHandshake, MapPin, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="relative bg-[#003366] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_rgba(212,165,116,0.3),_transparent_35%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-2xl">
              <p className="uppercase tracking-[0.4em] text-sm text-[#d4a574] mb-4">About UCT</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">A world-class university rooted in African excellence.</h1>
              <p className="text-lg text-gray-200 max-w-2xl mb-8">
                University of Cape Town is a leading research institution with a legacy of innovation, social impact and student success. We empower ambitious learners to lead change in South Africa, the continent and the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/study">
                  <Button className="bg-[#d4a574] hover:bg-[#c9a961] text-white">Explore Programs</Button>
                </Link>
                <Link href="/news">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">Latest News</Button>
                </Link>
              </div>
            </div>
            <div className="rounded-[32px] bg-white/10 p-8 border border-white/20 backdrop-blur-xl shadow-2xl">
              <div className="grid gap-6">
                {[
                  { label: 'Founded', value: '1829' },
                  { label: 'Students', value: '33,000+' },
                  { label: 'Faculties', value: '10' },
                  { label: 'Research Centres', value: '150+' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <span className="text-sm uppercase tracking-[0.2em] text-gray-300">{item.label}</span>
                    <span className="text-2xl font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div>
            <div className="max-w-xl">
              <p className="text-[#d4a574] uppercase tracking-[0.35em] text-sm mb-4">Our story</p>
              <h2 className="text-4xl font-bold text-[#003366] mb-6">A confident institution with impact across education, research and community.</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                UCT combines a deep heritage with modern purpose. Our campus is a hub for pioneering research, inclusive teaching and student experience. We support learners at every stage and create pathways into global careers, public service, and entrepreneurship.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From STEM innovation to arts leadership, our students are guided by expert faculty and world-class facilities. We commit to equity, sustainability and generating knowledge that makes an enduring difference.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {[
              {
                icon: Globe2,
                title: 'Global reputation',
                description: 'Ranked among the top universities in Africa, UCT attracts scholars and partners from around the world.',
              },
              {
                icon: GraduationCap,
                title: 'Academic excellence',
                description: 'A broad range of undergraduate and postgraduate programmes designed for impact and career readiness.',
              },
              {
                icon: HeartHandshake,
                title: 'Community engagement',
                description: 'Strong local partnerships, civic innovation and outreach that support South African communities.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-2xl bg-[#003366] text-white">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[#003366] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                icon: Award,
                title: 'Research excellence',
                description: 'Strategic investments in research translate into scholarships, innovation grants, and publications that shape policy and industry.',
              },
              {
                icon: MapPin,
                title: 'Campus experience',
                description: 'A modern campus in Cape Town offering vibrant student life, world-class facilities, and accessible support services.',
              },
              {
                icon: Users,
                title: 'Diverse community',
                description: 'An inclusive campus with students from across South Africa and global exchange partners.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-2xl bg-[#d4a574] text-[#003366]">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-[#d4a574] uppercase tracking-[0.35em] text-sm mb-4">Why choose UCT</p>
            <h2 className="text-4xl font-bold text-[#003366] mb-6">Built for ambitious learners, future leaders and lifelong learners.</h2>
            <ul className="space-y-5 text-gray-700">
              <li className="flex gap-4">
                <span className="mt-1 text-[#d4a574]">•</span>
                <span>Personalised academic advising and professional development support.</span>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 text-[#d4a574]">•</span>
                <span>Strong employer connections and international research collaborations.</span>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 text-[#d4a574]">•</span>
                <span>A thriving campus culture where wellbeing and belonging are central.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
              alt="UCT campus building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
