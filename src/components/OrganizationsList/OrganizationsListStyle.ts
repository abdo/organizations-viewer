import theme from '@/src/style/theme';
import styled from 'styled-components';

export const OrganizationListStyled = styled.div`
  margin: 3rem auto;
  padding: 5.9rem 7.9rem;
  width: 97.4rem;
  min-width: 60%;
  max-width: 95%;
  background-color: ${theme.colors.gray1};
  border-radius: 2.4rem;

  @media only screen and (max-width: 768px) {
    padding: 3rem;
  }
`;
