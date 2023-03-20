import theme from '@/src/style/theme';
import styled from 'styled-components';

export const textTypes = {
  big: 'big',
  medium: 'medium',
  small: 'small',
  tiny: 'tiny',
};

export const Text = styled.p<{
  type?: string;
  color?: string;
  fw?: string;
}>`
  color: ${(props) => props.color || theme.colors.black};
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => {
    switch (props.type) {
      case textTypes.big:
        return '3.2rem';
      case textTypes.medium:
        return '2.4rem';
      case textTypes.small:
        return '1.8rem';
      case textTypes.tiny:
        return '1.6rem';
      default:
        return '1.6rem';
    }
  }};
`;
