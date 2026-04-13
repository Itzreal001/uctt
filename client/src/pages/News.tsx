import { Link } from 'wouter';
import { CalendarDays, Megaphone, Sparkles, Newspaper } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const newsArticles = [
  {
    category: 'Campus',
    title: 'UCT Launches New Student Success Hub',
    excerpt: 'A dedicated campus centre now supports student wellness, careers and academic success with integrated services in one welcoming space.',
    date: 'April 10, 2026',
  },
  {
    category: 'Research',
    title: 'Researchers Receive National Grant for Climate Resilience',
    excerpt: 'UCT scientists will lead partnerships across the continent to develop sustainable water management systems for vulnerable communities.',
    date: 'April 5, 2026',
  },
  {
    category: 'Admissions',
    title: 'Open House Week for Prospective Students',
    excerpt: 'Register now to attend virtual information sessions and campus tours designed for future UCT students.',
    date: 'March 30, 2026',
  },
  {
    category: 'Events',
    title: 'Annual Innovation Showcase Celebrates Student Projects',
    excerpt: 'UCT students presented creative solutions across health, education, energy and community development at the 2026 showcase.',
    date: 'March 22, 2026',
  },
];

const spotlightStories = [
  {
    title: 'UCT Partners with Global Health Initiative',
    description: 'A new collaboration strengthens public health research and training across Africa.',
  },
  {
    title: 'Alumni Spotlight: Leaders in Sustainability',
    description: 'Graduates are making impact in climate policy, renewable energy and sustainable cities.',
  },
];

export default function News() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="relative bg-[#003366] text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-sm text-[#d4a574] mb-4">Latest updates</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">News and announcements from UCT.</h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Stay informed about campus news, research breakthroughs, admissions updates and student life stories from one of Africa’s most respected universities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/register">
                <Button className="bg-[#d4a574] hover:bg-[#c9a961] text-white">Apply Now</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">About UCT</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex flex-wrap gap-3 mb-8">
              {['All', 'Campus', 'Research', 'Admissions', 'Events'].map((label) => (
                <button
                  key={label}
                  className="rounded-full border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:border-[#003366] hover:text-[#003366] transition"
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="grid gap-8">
              {newsArticles.map((article) => (
                <article key={article.title} className="rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="p-8 bg-white">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#d4a574]/10 px-3 py-1 text-sm font-semibold text-[#003366]">
                        <Sparkles className="w-4 h-4" /> {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.date}</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-[#003366] mb-4">{article.title}</h2>
                    <p className="text-gray-600 mb-6">{article.excerpt}</p>
                    <Link href="#" className="font-semibold text-[#003366] hover:text-[#d4a574]">
                      Read full story →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-3xl border border-gray-200 bg-[#f7f9fc] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 text-[#003366]">
                <CalendarDays className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Upcoming events</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong>Open House Week</strong>
                  <p className="text-sm text-gray-500">May 5 - May 10, 2026</p>
                </li>
                <li>
                  <strong>Research Symposium</strong>
                  <p className="text-sm text-gray-500">June 8, 2026</p>
                </li>
                <li>
                  <strong>Graduation Ceremony</strong>
                  <p className="text-sm text-gray-500">July 15, 2026</p>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 text-[#003366]">
                <Megaphone className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Spotlight stories</h3>
              </div>
              <div className="space-y-6">
                {spotlightStories.map((story) => (
                  <div key={story.title}>
                    <h4 className="font-semibold text-[#003366] mb-2">{story.title}</h4>
                    <p className="text-gray-600">{story.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-[#f7f9fc] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 text-[#003366]">
                <Newspaper className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Press coverage</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                UCT continues to be featured in national and international media for breakthroughs in research, student achievement and sustainability leadership.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#003366] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Want the latest announcements first?</h2>
            <p className="text-lg text-gray-200 mb-8">
              Subscribe to our mailing list and get the latest updates on admissions, research breakthroughs, and campus events.
            </p>
            <Button className="bg-[#d4a574] hover:bg-[#c9a961] text-white">Subscribe Now</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
