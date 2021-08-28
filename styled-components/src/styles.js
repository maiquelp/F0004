import styled from 'styled-components';

export const Title = styled.h1`
  color: #f00;
  font-size: ${props => `${props.fontSize}px`};
  background: #000;

  span {
    font-size: 12px;
  }
`;

export const SmallTitle = styled(Title)`
  color: #00f
`;