import AppShell from '../components/app/AppShell';
import SectionTitle from '../components/app/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function DietPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionTitle
          title="Diet"
          subtitle="Simple templates you can follow."
        />

        <Card className="rounded-2xl">
          <CardContent className="p-6 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-full">2200 kcal</Badge>
              <Badge variant="secondary" className="rounded-full">
                Protein 140g
              </Badge>
              <Badge variant="secondary" className="rounded-full">
                Carbs 240g
              </Badge>
              <Badge variant="secondary" className="rounded-full">
                Fat 60g
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                ['Breakfast', 'Oats + milk + banana OR 4 eggs + toast'],
                ['Lunch', 'Rice/roti + dal + paneer/chicken + salad'],
                ['Snack', 'Curd + fruits OR whey (optional) + nuts'],
                ['Dinner', 'Roti + veggies + protein source + light carbs'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border p-4">
                  <p className="font-medium text-slate-900">{title}</p>
                  <p className="text-sm text-slate-500 mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
