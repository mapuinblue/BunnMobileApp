import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// Importaciones básicas de páginas
import Main from './pages/Main/Main';
import Tasks from './pages/Tasks/Tasks';
import FinishD from './pages/FinishD/FinishD';
import SetTask from './pages/SetTask/SetTask';
import TimerBegins from './pages/TimerBegins/TimerBegins';
import StopWork from './pages/StopWork/StopWork';
import StartBreak from './pages/StartBreak/StartBreak';
import StopBreak from './pages/StopBreak/StopBreak';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/main">
          <Main />
        </Route>
        <Route exact path="/tasks">
          <Tasks />
        </Route>
        <Route exact path="/finish">
          <FinishD />
        </Route>
        <Route exact path="/timer/set-task">
          <SetTask />
        </Route>
        <Route exact path="/timer/timer-begins">
          <TimerBegins />
        </Route>
        <Route exact path="/timer/stop-work">
          <StopWork />
        </Route>
        <Route exact path="/timer/start-break">
          <StartBreak />
        </Route>
        <Route exact path="/timer/stop-break">
          <StopBreak />
        </Route>
        
        <Route exact path="/">
          <Redirect to="/main" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;