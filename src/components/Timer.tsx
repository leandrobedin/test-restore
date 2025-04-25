
import { useEffect, useState } from 'react';

interface TimerProps {
  initialMinutes: number;
  initialSeconds: number;
}

const Timer = ({ initialMinutes, initialSeconds }: TimerProps) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(interval); // Clear the interval when timer reaches 0:00
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4">
      <div className="glass-card p-2 md:p-4 w-16 md:w-20 text-center">
        <div className="text-lg md:text-3xl font-bold text-white">{minutes.toString().padStart(2, '0')}</div>
        <div className="text-xs text-fuschia-500">minutos</div>
      </div>
      <div className="text-2xl md:text-4xl font-bold">:</div>
      <div className="glass-card p-2 md:p-4 w-16 md:w-20 text-center">
        <div className="text-lg md:text-3xl font-bold text-white">{seconds.toString().padStart(2, '0')}</div>
        <div className="text-xs text-fuschia-500">segundos</div>
      </div>
    </div>
  );
};

export default Timer;
