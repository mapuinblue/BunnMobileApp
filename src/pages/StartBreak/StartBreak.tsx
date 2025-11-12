import React, { useState, useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './StartBreak.css';

const StartBreak: React.FC = () => {
  const history = useHistory();
  const [task, setTask] = useState('No task available');
  const [timeRemaining, setTimeRemaining] = useState('10:00');

  useEffect(() => {
    // Obtener la tarea del localStorage
    const taskValue = localStorage.getItem('taskValue') || 'No task available';
    setTask(taskValue);

    // Iniciar countdown de 10 minutos
    let duration = 10 * 60; // 10 minutos en segundos

    const updateCountdown = () => {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      
      setTimeRemaining(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);

      if (duration > 0) {
        duration--;
      } else {
        clearInterval(interval);
        // Navegar a stopBreak cuando termine
        history.push('/timer/stop-break');
      }
    };

    // Llamada inicial para evitar delay de 1 segundo
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [history]);

  return (
    <IonPage>
      <IonContent className="start-break-content">
        <div className="takingBreakDiv">
          <h1>TAKING A BREAK...</h1>
          <p id="task">{task}</p>
          <p id="time-remaining">{timeRemaining}</p>
          <img src="/assets/tomatoSleep.gif" alt="Pomodoro Sleep" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default StartBreak;