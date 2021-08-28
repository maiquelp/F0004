import styled from 'styled-components';

const List = styled.ul`
  background: ${props => props.theme.theme.background};
  color: ${props => props.theme.theme.color};

  li {
    line-height: 36px;
  }
`;

const TodoList = () => (
  <List>
    <li>Fazer café</li>
    <li>Entrar na comunidade de RocketSeat</li>
    <li>Estudar React</li>
  </List>
);

export default TodoList;