import styled, { css } from 'styled-components';

interface CircleButtonProps {
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  > p {
    flex: 1;
    text-align: right;
    font-size: 1rem;
  }
  > section {
    margin-left: 1rem;
    display: flex;
    flex: 1;
  }
`;

export const CircleButton = styled.button<CircleButtonProps>`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1rem;
  border-radius: 50%;
  outline: none;
  border: none;

  ${(props) => props.selected && css`
  border: 2.5px solid red;
  `}
`;
