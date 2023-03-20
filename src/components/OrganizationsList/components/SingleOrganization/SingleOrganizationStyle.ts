import theme from '@/src/style/theme';
import styled from 'styled-components';

export const SingleOrganizationWrapper = styled.div`
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const OrganizationImage = styled.img`
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 50%;
`;
