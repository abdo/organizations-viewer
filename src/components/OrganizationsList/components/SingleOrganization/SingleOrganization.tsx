import Box from '@/src/common/components/basic/Box';
import theme from '@/src/style/theme';
import OrganizationType from '@/src/types/organization';
import { SingleOrganizationWrapper } from './SingleOrganizationStyle';

type Props = {
  organization: OrganizationType;
};

const SingleOrganization = ({ organization }: Props) => {
  return (
    <SingleOrganizationWrapper>
      <Box
        bgc={theme.colors.gray2}
        m='1.6rem'
        p='2.4rem'
        borderRadius='1.4rem'
        b={`2px solid ${theme.colors.gray3}`}
      >
        {organization.login}
      </Box>
    </SingleOrganizationWrapper>
  );
};

export default SingleOrganization;
