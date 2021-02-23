import { CountdownContainer, Button } from '../styles/components/countdown';

export default function Countdown() {
  return (
    <>
      <CountdownContainer>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
      </CountdownContainer>
      <Button type="button">Iniciar um ciclo</Button>
    </>
  );
}
