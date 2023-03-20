import Box from '@/src/common/components/basic/Box';
import { Text, textTypes } from '@/src/common/components/basic/Text';
import {
  organizationsShownPerPage,
  organizationsShownSince,
} from '@/src/constants';
import OrganizationType from '@/src/types/organization';
import getOrganizations from '@/src/utils/requests/getOrganizations';
import { useQuery } from 'react-query';
import SingleOrganization from './components/SingleOrganization/SingleOrganization';
import { OrganizationListStyled } from './OrganizationsListStyle';

const OrganizationsList = () => {
  const { isLoading, data } = useQuery('organizations', () =>
    getOrganizations({
      perPage: organizationsShownPerPage,
      since: organizationsShownSince,
    }),
  );

  if (isLoading) {
    return (
      <Box m='2rem' display='flex' justifyContent='center'>
        <Text type={textTypes.medium}>Loading...</Text>
      </Box>
    );
  }

  if (data.message) {
    return <div>Error: {data.message}</div>;
  }

  return (
    <OrganizationListStyled>
      <Box m='0 0 1.6rem'>
        <Text type={textTypes.big}>GitHub organizations and their members</Text>
      </Box>
      <Box display='flex' flexWrap='wrap'>
        {data.map((organization: OrganizationType) => (
          <SingleOrganization
            key={organization.id}
            organization={organization}
          />
        ))}
      </Box>
    </OrganizationListStyled>
  );
};

export default OrganizationsList;
