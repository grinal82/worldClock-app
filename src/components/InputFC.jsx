import React, { useState } from 'react';
import Clock from './Clock'; // Импортируйте компонент Clock

function InputFC() {
  const [clocks, setClocks] = useState([]); // Мвссив для хранения всех экземпляров часов
  const [cityName, setCityName] = useState('');
  const [timezoneOffset, setTimezoneOffset] = useState(0);

  const handleAddClick = () => {
    // Обработчик добавления новых часов
    const newClock = {
      id: Date.now(), // Уникальный идентификатор для каждых часов
      cityName,
      timezoneOffset,
    };
    setClocks([...clocks, newClock]);
    // Очистите поля ввода
    setCityName('');
    setTimezoneOffset(0);
  };

  const handleDeleteClick = (id) => {
    // Обработчик удаления часов
    const updatedClocks = clocks.filter((clock) => clock.id !== id);
    setClocks(updatedClocks);
  };

  return (
    <div className="world-clock-app">
      <h1>Мировые часы</h1>
      <div className="clock-form">
        <div className='cityName-wrapper'>
          <label>Название города:</label>
          <input
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>
        <div className='timeZone-wrapper'>
          <label>Временная зона:</label>
          <input
            type="number"
            value={timezoneOffset}
            onChange={(e) => setTimezoneOffset(parseInt(e.target.value))}
          />
        </div>
        <button className='add-btn' onClick={handleAddClick}>Добавить</button>
      </div>
      <div className="clock-list">
        {clocks.map((clock) => (
          <div key={clock.id} className="clock-container">
            <h3>Время в - {clock.cityName}</h3>
            <span className="delete-button" onClick={() => handleDeleteClick(clock.id)}>
              &#10006;
            </span>
            <Clock timezoneOffset={clock.timezoneOffset} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InputFC;
