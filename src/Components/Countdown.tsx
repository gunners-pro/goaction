import { useContext } from 'react';
import { IoPlaySharp, IoCloseOutline } from 'react-icons/io5';
import { HiCheckCircle } from 'react-icons/hi';
import { ThemeContext } from 'styled-components';
import { CountdownContainer, Button } from '../styles/components/countdown';
import { CountdownContext } from '../contexts/CountdownContext';

export default function Countdown() {
  const { colors } = useContext(ThemeContext);
  const {
    minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      {hasFinished ? (
        <Button hasBorderBottom disabled>
          Ciclo Encerrado
          <HiCheckCircle color={colors.primary} size={22} />
        </Button>
      )
        : (
          <>
            {isActive ? (
              <Button className="countdownActive" onClick={resetCountdown} type="button">
                Abandonar ciclo
                <IoCloseOutline size={22} />
              </Button>
            )
              : (
                <Button onClick={startCountdown} type="button">
                  Iniciar um ciclo
                  <IoPlaySharp size={22} />
                </Button>
              )}
          </>
        )}
    </>
  );
}
