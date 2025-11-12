import React, { useState } from 'react';
import { 
  IonContent, 
  IonPage, 
  IonInput, 
  IonButton, 
  IonImg 
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './SetTask.css';

const SetTask: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const history = useHistory();

  const handleSetTimer = () => {
    if (task.trim()) {
      localStorage.setItem('taskValue', task);
      // Navegar a TimerBegins
      history.push('/timer/timer-begins');
    } else {
      console.log('Por favor, escribe una tarea');
    }
  };

  return (
    <IonPage>
      <IonContent className="setTask-content">
        <div className="setTaskDiv">
          <h1>SET YOUR TASK</h1>
          <IonImg 
            src="/assets/crayonPomo.png" 
            alt="Pomodoro Crayon" 
            className="setTask-image"
          />
          <p>
            Write down the task you want to achieve <br />
            during this session.
          </p>
          <IonInput
            value={task}
            placeholder="Write your task here..."
            onIonInput={(e) => setTask(e.detail.value!)}
            className="task-input"
          ></IonInput>
          <IonButton 
            onClick={handleSetTimer} 
            className="set-timer-btn"
            expand="block"
            fill="solid"
          >
            Set Timer
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SetTask;