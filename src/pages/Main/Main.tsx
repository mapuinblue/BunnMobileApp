import React from 'react';
import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Main.css';

const Main: React.FC = () => {
  const history = useHistory();

  const handleStart = () => {
    history.push('/tasks');
  };

  return (
    <IonPage>
      <IonContent className="main-content">
        <div className="container">
          <h1 className="title">Bunn Productivity</h1>
          
          <div className="mascot-container">
            <img 
              src="/assets/bunny-mascot.png" 
              alt="Bunn Mascot" 
              className="mascot-image"
            />
          </div>

          <IonButton 
            className="start-button" 
            expand="block"
            onClick={handleStart}
          >
            Start
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Main;