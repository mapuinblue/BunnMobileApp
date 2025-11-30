import React, { useState, useEffect, useRef } from 'react';
import { IonContent, IonPage, IonButton, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './WorkTimer.css';

const WorkTimer: React.FC = () => {
  const history = useHistory();
  const [task, setTask] = useState('No task available');
  const [timeRemaining, setTimeRemaining] = useState('25:00');
  const [isPaused, setIsPaused] = useState(false);
  const [duration, setDuration] = useState(25 * 60);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const taskValue = localStorage.getItem('taskValue') || 'No task available';
    setTask(taskValue);

    startTimer();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setDuration((prevDuration) => {
        if (prevDuration > 0) {
          const newDuration = prevDuration - 1;
          const minutes = Math.floor(newDuration / 60);
          const seconds = newDuration % 60;
          setTimeRemaining(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
          return newDuration;
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          history.push('/timer/stop-work');
          return 0;
        }
      });
    }, 1000);
  };

  const handlePause = () => {
    if (isPaused) {
      setIsPaused(false);
      startTimer();
    } else {
      setIsPaused(true);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const handleGoBack = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    history.push('/tasks');
  };

  return (
    <IonPage>
      <IonContent className="work-timer-content" fullscreen>
        <div className="workTimerDiv">
          <h1>LET'S GO !</h1>
          <IonText id="task">{task}</IonText>
          <IonText id="time-remaining">{timeRemaining}</IonText>
          <img src="/assets/TomatoWaitFun.gif" alt="Pomodoro Timer" />
          
          <div className="timer-controls">
            <IonButton 
              className="control-btn pause-btn" 
              onClick={handlePause}
              expand="block"
            >
              {isPaused ? 'Resume' : 'Pause'}
            </IonButton>
            <IonButton 
              className="control-btn back-btn" 
              onClick={handleGoBack}
              expand="block"
            >
              Go Back
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WorkTimer;