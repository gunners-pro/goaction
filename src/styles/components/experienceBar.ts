import styled from 'styled-components';

interface ContainerProps {
  percentToNextLevel: number;
}

export const ContainerExperienceBar = styled.header<ContainerProps>`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.grayBar};
    margin: 0 1.5rem;
    position: relative;
  }

  > div > div {
    width: ${({ percentToNextLevel }) => percentToNextLevel}%;
    height: 4px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.primary};
  }

  > div > span {
    position: absolute;
    left: ${({ percentToNextLevel }) => percentToNextLevel}%;
    top: 12px;
    transform: translateX(-50%);
  }
`;
