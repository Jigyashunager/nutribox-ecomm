import React from 'react';
import Countdown from 'react-countdown';

const Timer = () => {
  var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  const renderer = ({ days, hours, minutes, seconds }: { days: number; hours: number, minutes: number, seconds: number }) => {
    return (
      <span className='timer-span'>
        <p>{days < 10 ? "0" + days: days}</p>
        <p>{hours < 10 ? "0" + hours: hours}</p>
        <p>{minutes < 10 ? "0" + minutes: minutes}</p>
        <p>{seconds < 10 ? "0" + seconds: seconds}</p>
      </span>
    );
  };
  return (
    
    <div className='timer'>
      <Countdown date={currentDate} renderer={renderer} />
    </div>
  );
};

export default Timer;
