import { Suspense } from 'react';
import { ClientList } from '@/components/clients/ClientList';
import { ClientSearch } from '@/components/clients/ClientSearch';
import { AddClientButton } from '@/components/clients/AddClientButton';
import { Skeleton } from '@/components/ui/skeleton';

export default function ClientsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Clients</h1>
        <AddClientButton />
      </div>
      
      <ClientSearch />
      
      <Suspense fallback={<ClientListSkeleton />}>
        <ClientList />
      </Suspense>
    </div>
  );
}

function ClientListSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="p-4 border rounded-lg">
          <Skeleton className="h-6 w-1/4 mb-2" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      ))}
    </div>
  );
}