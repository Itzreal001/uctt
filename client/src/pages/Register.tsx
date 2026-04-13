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
            <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Registration Disabled</h1>
            <p className="text-gray-600 mb-6">
              This is a frontend-only demo application. Registration is not available.
            </p>
            <p className="text-gray-600 mb-8 text-sm">
              Please use the demo credentials on the login page to access the portal.
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
