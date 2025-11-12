import React, { useState, useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './StopWork.css';

const StopWork: React.FC = () => {
  const history = useHistory();
  const [task, setTask] = useState('No task available');

  useEffect(() => {
    const taskValue = localStorage.getItem('taskValue') || 'No task available';
    setTask(taskValue);
  }, []);

  const handleStartBreak = () => {
    history.push('/timer/start-break');
  };

  return (
    <IonPage>
      <IonContent className="stop-work-content">
        <div className="stopWorkDiv">
          <audio src="/assets/clock_alarm.wav" autoPlay style={{ display: 'none' }} />
          <h1>BREAK TIME !</h1>
          <p id="task">{task}</p>
          <p id="time-remaining">00:00</p>
          <button id="start-break-btn" onClick={handleStartBreak}>
            Start Break
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default StopWork;