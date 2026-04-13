import { Link } from 'wouter';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Registration Closed</h1>
            <p className="text-gray-700 mb-2 font-semibold">Current Registration Period: 2026 Academic Year</p>
            <p className="text-gray-600 mb-6">
              Online student registration is currently closed. We will reopen registration for the next academic session in accordance with the official university calendar.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-left">
              <p className="text-sm text-gray-700 mb-2"><strong>Important dates:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>📅 <strong>Next Registration Window:</strong> July 1 – August 15, 2026</li>
                <li>📞 <strong>Questions?</strong> Contact the Registrar's Office</li>
                <li>🔗 <strong>Visit:</strong> registrar.uct.ac.za for more information</li>
              </ul>
            </div>
            <p className="text-gray-600 mb-8 text-sm">
              Existing students can access the portal using their credentials.
            </p>
            
            <Link href="/login">
              <Button className="w-full bg-[#003366] hover:bg-[#1a4d7a] text-white py-3 rounded-lg font-semibold">
                Back to Sign In
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
