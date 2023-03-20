import theme from '@/src/style/theme';
import styled from 'styled-components';

export const textTypes = {
  big: 'big',
  medium: 'medium',
  small: 'small',
};

export const Text = styled.p<{
  type?: string;
}>`
  color: ${theme.colors.black};
  font-size: ${(props) => {
    switch (props.type) {
      case textTypes.big:
        return '3.2rem';
      case textTypes.medium:
        return '2.4rem';
      case textTypes.small:
        return '1.6rem';
      default:
        return '1.6rem';
    }
  }};
`;
