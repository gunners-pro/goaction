import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${(props) => props.theme.colors.title};

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  > div > span {
    flex: 1;
  }

  > div > span:first-child {
    border-right: 1px solid #f0f1f3;
  }

  > div > span:last-child {
    border-left: 1px solid #f0f1f3;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-right: 5px;
  background: ${(props) => props.theme.colors.primary};
  color: var(--white);
  font-size: 1.25rem;
  font-weight: 600;
  transition: background-color 0.2s;

  &:disabled {
    background: var(--white);
    color: ${(props) => props.theme.colors.title};;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors.primaryHover};
  }

  &.countdownActive {
    background: var(--white);
    color: ${(props) => props.theme.colors.title};;
  }

  &.countdownActive:not(:disabled):hover {
    background: var(--red);
    color: var(--white);
  }
`;
