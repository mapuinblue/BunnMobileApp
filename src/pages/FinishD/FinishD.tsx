import React, { useState, useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './FinishD.css';

const FinishD: React.FC = () => {
  const history = useHistory();
  const [finalConclusion, setFinalConclusion] = useState<number>(0);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showUnsuccess, setShowUnsuccess] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [conclusionText, setConclusionText] = useState<string>("");

  useEffect(() => {
    const finalProgress = Number(localStorage.getItem("finalProgress"));
    
    console.log("Final Progress:", finalProgress);
    console.log("Type of finalProgress:", typeof finalProgress);

    setFinalConclusion(finalProgress);

    if (isNaN(finalProgress)) {
      console.log("Invalid final progress value");
      setShowSuccess(false);
      setShowUnsuccess(false);
      setTitle("No data");
      setConclusionText("No progress data available");
    } else if (finalProgress === 100) {
      setShowSuccess(true);
      setShowUnsuccess(false);
      setTitle("Doing good!");
      setConclusionText(`Your final progress: ${Math.round(finalProgress)}%`);
    } else {
      setShowSuccess(false);
      setShowUnsuccess(true);
      setTitle("Keep going!");
      setConclusionText(`Your final progress: ${Math.round(finalProgress)}%`);
    }
  }, []);

  const handleBackHome = () => {
    console.log("Botón BACK HOME clickeado");
    localStorage.removeItem("finalProgress");
    history.push('/'); // Cambiado de '/main' a '/'
  };

  return (
    <IonPage>
      <IonContent className="finish-content">
        <div className="finalDiv">
          <h1 id="final-title">{title}</h1>

          <div className="center-image">
            {showSuccess && (
              <img 
                src="/assets/FinishDaySuccessful.png" 
                alt="Success" 
                id="successTasks"
              />
            )}
            {showUnsuccess && (
              <img 
                src="/assets/FinishDayUnsuccessful.png" 
                alt="Keep trying" 
                id="unsuccessTasks"
              />
            )}
          </div>

          <span id="conclusion">{conclusionText}</span>

          <button id="restart-btn" onClick={handleBackHome}>
            Back Home
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default FinishD;