import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonButton, IonText } from '@ionic/react';
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
      <IonContent className="stop-work-content" fullscreen>
        <div className="stopWorkDiv">
          <audio src="/assets/clock_alarm.wav" autoPlay style={{ display: 'none' }} />
          <h1>BREAK TIME !</h1>
          <IonText id="task">{task}</IonText>
          <IonText id="time-remaining">00:00</IonText>
          <IonButton 
            id="start-break-btn" 
            onClick={handleStartBreak}
            className="start-break-btn"
            expand="block"
            fill="solid"
          >
            Start Break
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default StopWork;