import OrganizationType from '@/src/types/organization';
import getOrganizations from '@/src/utils/requests/getOrganizations';
import { useQuery } from 'react-query';
import SingleOrganization from './components/SingleOrganization/SingleOrganization';

const OrganizationsList = () => {
  const { isLoading, error, data } = useQuery(
    'organizations',
    getOrganizations,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Organizations List</h1>
      {data.map((organization: OrganizationType) => (
        <SingleOrganization key={organization.id} organization={organization} />
      ))}
    </div>
  );
};

export default OrganizationsList;
