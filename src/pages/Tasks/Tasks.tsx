import React, { useState, useEffect, useRef } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { StatusBar } from '@capacitor/status-bar';
import './Tasks.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const Tasks: React.FC = () => {
  const history = useHistory();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [currentDate, setCurrentDate] = useState({
    day: '',
    number: 0,
    month: ''
  });
  const progressBarRef = useRef<HTMLProgressElement>(null);

  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
  
    const setupStatusBar = async () => {
    try {
      await StatusBar.hide();
    } catch (error) {
      console.log('Status bar not available:', error);
    }
  };

  setupStatusBar();

    const today = new Date();
    setCurrentDate({
      day: weekday[today.getDay()],
      number: today.getDate(),
      month: month[today.getMonth()]
    });

  return () => {
    StatusBar.show().catch(() => {});
  };

  }, []);

  const addTask = () => {
    if (newTask.trim() === "") {
      console.warn("Please enter a task before adding to the list.");
    } else if (tasks.length >= 7) {
      console.warn("Task list is full. You can only add up to 7 tasks.");
    } else {
      const newTaskObj = {
        id: Date.now(),
        text: newTask,
        completed: false
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

    const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleFinishDay = () => {
    // Obtener el valor ACTUAL del progress bar
    const progressValue = progressBarRef.current?.value || 0;
    
    console.log("Saving progress:", progressValue);
    localStorage.setItem("finalProgress", progressValue.toString());
    
    // Navegar
    history.push('/finish');
  };

  const handleTimer = () => {
    console.log("Navigate to Timer");
    history.push('/timer/set-task');
  };

  // Calcular el progreso
  const completedTasks = tasks.filter(t => t.completed).length;
  const progressValue = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

  const taskSlots = Array.from({ length: 7 }, (_, index) => tasks[index] || null);

  return (
    <IonPage>
      <IonContent className="tasks-content" scrollY={true}>
        <div className="dashDiv">
          {/* Header Cards */}
          <div className="header-cards">
            <div className="date-card">
              <span className="day">{currentDate.day}</span>
              <span className="number">{currentDate.number}</span>
              <span className="month">{currentDate.month}</span>
            </div>

            <div className="motivation-card">
              <span className="motivation-text">You<br/>got<br/>this!</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="progression">
            <h3>Progression</h3>
            <progress 
              ref={progressBarRef}
              id="progress-bar" 
              value={progressValue} 
              max="100"
            />
          </div>

          {/* Add Task Input */}
          <div className="add-task">
            <input 
              id="write-task" 
              type="text" 
              placeholder="Finish statistics lecture"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
            />
            <button id="add-btn" onClick={addTask}>+</button>
          </div>

          {/* Tasks List */}
          <div className="bottom-section">
            {taskSlots.map((task, index) => (
              <p 
                key={index} 
                id={`task${index + 1}`}
                style={{ display: task ? 'flex' : 'none' }}
              >
                <input 
                  type="checkbox" 
                  className="task-checkbox"
                  checked={task?.completed || false}
                  onChange={() => task && toggleTask(task.id)}
                />
                <span 
                  id={`text-task-${index + 1}`}
                  className={task?.completed ? 'done checked' : ''}
                  onClick={() => task && toggleTask(task.id)}
                >
                  {task?.text || ''}
                </span>
                {/* BOTÓN DE ELIMINAR */}
                {task && (
                  <button 
                    className="delete-btn"
                    onClick={() => deleteTask(task.id)}
                  >
                    ×
                  </button>
                )}
              </p>
            ))}
          </div>

          {/* Bottom Buttons */}
          <div className="btn-container">
            <button id="finish-btn" onClick={handleFinishDay}>Finish Day</button>
            <button id="timer-btn" onClick={handleTimer}>BunnTimer</button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tasks;