import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { getCountries } from '@/lib/api';
import DashboardCard from '@/app/components/dashboard-card';

export default async function Page() {
  const data = await getCountries({
    cache: 'no-store',
  });

  return (
    <DashboardCard label="Countries of companies">
      <div className="flex items-end pb-5 px-5 gap-2">
        <div>
          {data.map(({ id, title, count }) => (
            <p
              key={id}
              className={clsx(
                'text-sm text-gray-900 font-medium',
                'before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200',
              )}
            >{`${title} - ${count}`}</p>
          ))}
        </div>
        <Image width={395} height={262} src="/images/world.svg" alt="world" />
      </div>
    </DashboardCard>
  );
}
