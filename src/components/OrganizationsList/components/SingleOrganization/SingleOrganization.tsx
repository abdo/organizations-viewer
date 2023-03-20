import Box from '@/src/common/components/basic/Box';
import { Text, textTypes } from '@/src/common/components/basic/Text';
import theme from '@/src/style/theme';
import MemberType from '@/src/types/member';
import OrganizationType from '@/src/types/organization';
import getPublicMembers from '@/src/utils/requests/getPublicMembers';
import { useState } from 'react';
import { useQuery } from 'react-query';
import MemberPreview from './components/MemberPreview/MemberPreview';
import {
  SingleOrganizationCard,
  EntityImage,
  SingleOrganizationWrapper,
} from './SingleOrganizationStyle';

type Props = {
  organization: OrganizationType;
};

const SingleOrganization = ({
  organization: { login, avatar_url: avatarUrl, id, node_id: nodeId },
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isLoading: isLoadingMembers, data } = useQuery(
    `${login}public members`,
    () =>
      getPublicMembers({
        organizationLogin: login,
      }),
    {
      // enabled: false, // in case we only want to fetch data when we click on the organization
      // refetchOnWindowFocus: false,
    },
  );

  const onClickOrganization = () => {
    setIsOpen(!isOpen);
  };

  const nodeIdShortened =
    nodeId.length > 20 ? nodeId.substring(0, 20).concat('...') : nodeId;

  if (isLoadingMembers) {
    return <div>Loading...</div>;
  }

  if (data.message) {
    return <div>Error: {data.message}</div>;
  }

  return (
    <SingleOrganizationWrapper>
      <SingleOrganizationCard
        open={isOpen}
        numberOfMembers={data?.length}
        bgc={theme.colors.gray2}
        m='1.6rem'
        p='2.4rem'
        borderRadius='1.4rem'
        b={`2px solid ${theme.colors.gray3}`}
        onClick={onClickOrganization}
        pointer
        overflowX='auto'
        position='relative'
      >
        <Box display='flex'>
          {/* Image */}

          <Box display='flex' m='0 2.4rem 0 0'>
            <EntityImage src={avatarUrl} alt='Organization image' />
          </Box>

          {/* Organization Data */}

          <Box display='flex' flexDirection='column'>
            <Text type={textTypes.medium}>{login}</Text>
            <Text type={textTypes.tiny}>{id}</Text>
            <Text type={textTypes.tiny}>{nodeIdShortened}</Text>
          </Box>
        </Box>

        {/* Members */}

        <Box opacity={isOpen ? 1 : 0} m='1.6rem 0'>
          <Box m='0 0 1.2rem'>
            <Text type={textTypes.small} fw='700'>
              MEMBERS
            </Text>
          </Box>

          {isLoadingMembers ? (
            'Loading members...'
          ) : data.length === 0 ? (
            <Text fw='400'>No members for this organization.</Text>
          ) : (
            <Box>
              <Box display='flex' flexDirection='column' m='0 0 0 1rem'>
                {data?.map((member: any) => (
                  <MemberPreview key={member.id} member={member} />
                ))}
              </Box>
            </Box>
          )}

          {/* Arrow */}
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            m='1rem 0 0'
          >
            <Box fz='45px' fw='light' color={theme.colors.gray5}>
              &#8963;
            </Box>
          </Box>

          {/* Members numbers */}

          <Box position='absolute' left='2rem' top='17rem'>
            {data.map((_: MemberType, i: number) => (
              <>
                <Text type={textTypes.tiny} color={theme.colors.gray3}>
                  {i + 1}
                </Text>
                <Box
                  h='7rem'
                  w='1px'
                  bgc={theme.colors.gray3}
                  m='0 0 0 3px'
                  hidden={i === data.length - 1}
                ></Box>
              </>
            ))}
          </Box>
        </Box>
      </SingleOrganizationCard>
    </SingleOrganizationWrapper>
  );
};

export default SingleOrganization;
