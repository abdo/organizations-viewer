import Box from '@/src/common/components/basic/Box';
import theme from '@/src/style/theme';
import styled from 'styled-components';

type props = {
  open: boolean;
  numberOfMembers: number;
};

export const SingleOrganizationCard = styled(Box)<props>`
  max-height: ${(props) =>
    props.open
      ? `${
          13 + (props.numberOfMembers ? props.numberOfMembers * 10.5 + 4 : 9)
        }rem`
      : '13rem'};
  overflow: hidden;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 2px 4px 16px rgba(196, 196, 196, 0.3);
  }
`;

export const SingleOrganizationWrapper = styled.div`
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const EntityImage = styled.img<{
  size?: string;
}>`
  width: ${(props) => (props.size ? props.size : '7.2rem')};
  height: ${(props) => (props.size ? props.size : '7.2rem')};
  border-radius: 50%;
`;
