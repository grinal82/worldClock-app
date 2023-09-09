import React, { useState, useEffect } from 'react';

function Clock({timezoneOffset}) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Обновление времени каждую секунду
      setCurrentTime(new Date());
    }, 1000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  const updateTime = () => {
    const now = currentTime;
    const adjustedTime = new Date(now.getTime()+((timezoneOffset-3)* 60 * 60 * 1000));

    // Возвращаем объект с углами для стрелок
    return {
      hours: (adjustedTime.getHours()/12)*360 + (adjustedTime.getMinutes()/60) *30,
      minutes: (adjustedTime.getMinutes()/60)* 360 + (adjustedTime.getSeconds()/60)*6,
      seconds: (adjustedTime.getSeconds()/60)*360,
    };
  };

  const { hours, minutes, seconds } = updateTime();

  return (
    <div className="clock">
      <div className="wrap">
        <span className="hour" style={{ transform: `rotate(${hours}deg)` }}></span>
        <span className="minute" style={{ transform: `rotate(${minutes}deg)` }}></span>
        <span className="second" style={{ transform: `rotate(${seconds}deg)` }}></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default Clock;
