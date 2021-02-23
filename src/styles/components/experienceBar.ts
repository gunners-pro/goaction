import styled from 'styled-components'

export const ContainerExperienceBar = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background-color: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;
  }

  > div > div {
    width: 50%;
    height: 4px;
    border-radius: 4px;
    background-color: var(--green);
  }

  > div > span {
    position: absolute;
    left: 50%;
    top: 12px;
    transform: translateX(-50%);
  }
`
