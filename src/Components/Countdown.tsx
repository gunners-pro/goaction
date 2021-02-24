import { useEffect, useState, useContext } from 'react';
import { IoPlaySharp, IoCloseOutline } from 'react-icons/io5';
import { HiCheckCircle } from 'react-icons/hi';
import { ThemeContext } from 'styled-components';
import { CountdownContainer, Button } from '../styles/components/countdown';

let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {
  const { colors } = useContext(ThemeContext);
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearInterval(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

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
