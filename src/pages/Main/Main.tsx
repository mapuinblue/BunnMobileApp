import React, { useEffect } from 'react';
import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { StatusBar } from '@capacitor/status-bar';
import './Main.css';

const Main: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const setupStatusBar = async () => {
      try {
        // Ocultar la status bar
        await StatusBar.hide();
        
        // O para mantenerla pero transparente:
        // await StatusBar.setOverlaysWebView({ overlay: true });
        // await StatusBar.setBackgroundColor({ color: '#F5DFE2' });
      } catch (error) {
        console.log('Status bar not available:', error);
      }
    };

    setupStatusBar();

    // Restaurar cuando se desmonte el componente
    return () => {
      StatusBar.show().catch(() => {});
    };
  }, []);

  const handleStart = () => {
    history.push('/tasks');
  };

  return (
    <IonPage>
      <IonContent className="main-content" fullscreen>
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