import Box from '@/src/common/components/basic/Box';
import { Text, textTypes } from '@/src/common/components/basic/Text';
import MemberType from '@/src/types/member';
import { EntityImage } from '../../SingleOrganizationStyle';

type Props = {
  member: MemberType;
};

const MemberPreview = ({
  member: { login, avatar_url: avatarUrl, id },
}: Props) => {
  return (
    <Box display='flex' p='1.4rem'>
      {/* Image */}

      <Box display='flex' m='0 2.4rem 0 0'>
        <EntityImage size='6rem' src={avatarUrl} alt='Organization image' />
      </Box>

      {/* Organization Data */}

      <Box display='flex' flexDirection='column'>
        <Text type={textTypes.small}>{login}</Text>
        <Text type={textTypes.tiny}>{id}</Text>
      </Box>
    </Box>
  );
};

export default MemberPreview;
