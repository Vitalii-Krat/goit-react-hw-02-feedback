import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  background-color: white;
  border: 1px solid whitesmoke;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    transform: scale(1.222);
  }
  &:not(:last-child) {
    margin-right: 12px;
  }
`;

export { Button };
