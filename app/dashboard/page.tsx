import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import { Button } from '@/components/ui/button';

export default async function Dashboard() {
  const session = await getSession();
  
  if (!session) {
    redirect('/');
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-600 mb-4">Welcome to your dashboard!</p>
          <form action="/api/auth/logout" method="POST">
            <Button type="submit" variant="destructive">
              Logout
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}