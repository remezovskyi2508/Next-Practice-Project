import React from 'react';
import { getCategories } from '@/lib/api';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import DashboardCard from '@/app/components/dashboard-card';

export default async function Page() {
  const data = await getCategories({
    next: {
      revalidate: 5,
    }
  });
  

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {data.map(({ id, title, count }) => (
          <div key={id} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={title}
              counter={count}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
