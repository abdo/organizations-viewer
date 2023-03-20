import Box from '@/src/common/components/basic/Box';
import { Text, textTypes } from '@/src/common/components/basic/Text';
import theme from '@/src/style/theme';
import OrganizationType from '@/src/types/organization';
import getPublicMembers from '@/src/utils/requests/getPublicMembers';
import { useQuery } from 'react-query';
import {
  OrganizationImage,
  SingleOrganizationWrapper,
} from './SingleOrganizationStyle';

type Props = {
  organization: OrganizationType;
};

const SingleOrganization = ({
  organization: { login, avatar_url: avatarUrl, id, node_id: nodeId },
}: Props) => {
  const {
    isLoading,
    error,
    data,
    refetch: getPublicMembersQuery,
  } = useQuery(
    `${login}public members`,
    () =>
      getPublicMembers({
        organizationLogin: login,
      }),
    {
      refetchOnWindowFocus: false,
      enabled: false, // disable this query from automatically running
    },
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const onClickOrganization = () => {
    getPublicMembersQuery();
  };

  const nodeIdShortened =
    nodeId.length > 20 ? nodeId.substring(0, 20).concat('...') : nodeId;

  return (
    <SingleOrganizationWrapper>
      <Box
        bgc={theme.colors.gray2}
        m='1.6rem'
        p='2.4rem'
        borderRadius='1.4rem'
        b={`2px solid ${theme.colors.gray3}`}
        onClick={onClickOrganization}
        display='flex'
        pointer
        overflowX='auto'
      >
        {/* Image */}

        <Box display='flex' m='0 2.4rem 0 0'>
          <OrganizationImage src={avatarUrl} alt='Organization image' />
        </Box>

        {/* Organization Data */}

        <Box display='flex' flexDirection='column'>
          <Text type={textTypes.medium}>{login}</Text>
          <Text type={textTypes.small}>{id}</Text>
          <Text type={textTypes.small}>{nodeIdShortened}</Text>
        </Box>
      </Box>
    </SingleOrganizationWrapper>
  );
};

export default SingleOrganization;
