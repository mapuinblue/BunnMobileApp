import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonButton, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './StopBreak.css';

const StopBreak: React.FC = () => {
  const history = useHistory();
  const [task, setTask] = useState('No task available');

  useEffect(() => {
    const taskValue = localStorage.getItem('taskValue') || 'No task available';
    setTask(taskValue);
  }, []);

const handleStartTimer = () => {
  history.push('/timer/work-timer');
};

  return (
    <IonPage>
      <IonContent className="stop-break-content" fullscreen>
        <div className="stopBreakDiv">
          <audio src="/assets/clock_alarm.wav" autoPlay style={{ display: 'none' }} />
          <h1>BACK TO WORK !</h1>
          <IonText id="task">{task}</IonText>
          <IonText id="time-remaining">00:00</IonText>
          <IonButton 
            id="start-timer-btn" 
            onClick={handleStartTimer}
            className="start-timer-btn"
            expand="block"
            fill="solid"
          >
            Start Timer
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default StopBreak;