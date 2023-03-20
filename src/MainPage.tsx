import { QueryClient, QueryClientProvider } from 'react-query';
import OrganizationsList from './components/OrganizationsList/OrganizationsList';

const queryClient = new QueryClient();

const MainPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <OrganizationsList />
      </main>
    </QueryClientProvider>
  );
};

export default MainPage;
