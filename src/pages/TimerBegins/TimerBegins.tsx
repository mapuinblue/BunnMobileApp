import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './TimerBegins.css';

const TimerBegins: React.FC = () => {
  const history = useHistory();
  const [task, setTask] = useState('No task available');
  const [timeRemaining, setTimeRemaining] = useState('25:00');

  useEffect(() => {
    // Obtener la tarea del localStorage
    const taskValue = localStorage.getItem('taskValue');
    if (taskValue) {
      setTask(taskValue);
    }

    // Iniciar countdown de 25 minutos
    let duration = 25 * 60; // 25 minutos en segundos

    const interval = setInterval(() => {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      
      setTimeRemaining(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);

      if (duration > 0) {
        duration--;
      } else {
        clearInterval(interval);
        // Navegar a stopWork cuando termine
        history.push('/timer/stop-work');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [history]);

  return (
    <IonPage>
      <IonContent className="timer-begins-content" fullscreen>
        <div className="timerBeginsDiv">
          <h1>LET'S GO !</h1>
          <IonText id="task">{task}</IonText>
          <IonText id="time-remaining">{timeRemaining}</IonText>
          <img src="/assets/TomatoWaitFun.gif" alt="Pomodoro Timer" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TimerBegins;