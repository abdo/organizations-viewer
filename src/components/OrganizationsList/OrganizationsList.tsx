import { Text, textTypes } from '@/src/common/components/basic/Text';
import OrganizationType from '@/src/types/organization';
import getOrganizations from '@/src/utils/requests/getOrganizations';
import { useQuery } from 'react-query';
import SingleOrganization from './components/SingleOrganization/SingleOrganization';
import { OrganizationListStyled } from './OrganizationsListStyle';

const OrganizationsList = () => {
  const { isLoading, error, data } = useQuery(
    'organizations',
    getOrganizations,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <OrganizationListStyled>
      <Text type={textTypes.big}>GitHub organizations and their members</Text>
      {data.map((organization: OrganizationType) => (
        <SingleOrganization key={organization.id} organization={organization} />
      ))}
    </OrganizationListStyled>
  );
};

export default OrganizationsList;
