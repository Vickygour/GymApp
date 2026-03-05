import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Login</h1>
            <p className="text-sm text-slate-500 mt-1">
              (UI only) Auth later add karenge.
            </p>
          </div>

          <Button className="w-full rounded-xl">Continue</Button>

          <p className="text-xs text-slate-500">
            Back to{' '}
            <Link className="underline" href="/dashboard">
              Dashboard
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
