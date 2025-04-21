import AddCompanyButton from './components/add-company-button';
import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl mb-[30px]">Home Page</h1>
      <AddCompanyButton />
    </main>
  );
}
