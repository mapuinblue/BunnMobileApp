# 🐰 Bunn Productivity Mobile
![Ionic](https://img.shields.io/badge/-Ionic-3880FF?logo=ionic&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
![Capacitor](https://img.shields.io/badge/-Capacitor-119EFF?logo=capacitor&logoColor=white)

> Aplicación móvil multiplataforma para gestión de tareas con tracking de progreso en tiempo real, método Pomodoro integrado y diseño minimalista optimizado para usuarios con TDAH.

## 🌟 Vista General
Aplicación móvil *to-do list* que muestra la fecha actual al iniciar y calcula automáticamente tu porcentaje de productividad diario mediante una barra de progreso interactiva y sistema de recompensas visuales.

**Características Multiplataforma**:
- Funciona en iOS, Android y Web (PWA)
- Experiencia nativa en todos los dispositivos
- Sincronización offline-first

**Problema resuelto**:  
Dificultad para mantener la concentración y visualizar el progreso diario de tareas en entornos móviles, especialmente para usuarios con TDAH.

**Solución única**:  
- Interfaz minimalista y libre de distracciones
- Barra de progreso animada con feedback visual inmediato
- Sistema Pomodoro integrado sin opciones de escape
- Diseño emocional con recompensas visuales

## 📱 Capturas de Pantalla
| Vista Inicial | Gestión de Tareas | Pomodoro Timer | Resumen Diario |
|---------------|-------------------|----------------|----------------|
| <img width="250" alt="Pantalla Principal" src="/assets/main-screen.png" /> | <img width="250" alt="Lista de Tareas" src="/assets/tasks-screen.png" /> | <img width="250" alt="Timer Pomodoro" src="/assets/timer-screen.png" /> | <img width="250" alt="Resumen Final" src="/assets/summary-screen.png" /> |
| Navegación intuitiva | Progreso en tiempo real | Enfoque sin distracciones | Análisis de productividad |

## ⚙️ Funcionalidades Clave

| Característica | Detalle Técnico | Beneficio Usuario |
|----------------|-----------------|-------------------|
| **Gestión Visual de Tareas** | Estado React con actualizaciones en tiempo real | Feedback inmediato al completar tareas |
| **Progress Bar Animada** | Cálculo dinámico basado en tareas completadas/totales | Motivación visual y sentido de logro |
| **Sistema Pomodoro Integrado** | Timer de 25min trabajo + 5min descanso sin botones de escape | Enfoque forzado y gestión científica del tiempo |
| **Multiplataforma Nativo** | Ionic + Capacitor con componentes adaptables | Misma experiencia en iOS, Android y Web |
| **Almacenamiento Offline** | Ionic Storage + SQLite para persistencia local | Funcionamiento 100% sin conexión |
| **Diseño Accesible** | Contraste WCAG 2.1 AA y navegación por pestañas | Optimizado para usuarios con TDAH |

## 🛠️ Tech Stack

**Frontend Mobile**:
- Ionic React 7+ (Componentes UI multiplataforma)
- TypeScript (Tipado estático y mejor desarrollo)
- React Hooks (Gestión de estado moderna)
- CSS3 (Diseño responsive y animaciones)

**Runtime Nativo**:
- Capacitor 5+ (Bridge para APIs nativas)
- SQLite (Almacenamiento local persistente)
- PWA Support (Instalación como app nativa)

**Herramientas**:
- React Router (Navegación entre pantallas)
- Ionic Storage (Abstracción de almacenamiento)
- Vite (Build tool optimizado)

## 🚀 Instalación y Desarrollo

```bash
# Clonar repositorio
git clone https://github.com/mapuinblue/BunnProductivity-Mobile.git

# Instalar dependencias
npm install

# Ejecutar en navegador
ionic serve

# Ejecutar en dispositivo iOS
ionic capacitor run ios

# Ejecutar en dispositivo Android
ionic capacitor run android

# Construir PWA
npm run build
```

## 📦 Distribución

### App Stores
```bash
# Preparar build iOS
ionic capacitor build ios

# Preparar build Android
ionic capacitor build android
```

### PWA (Progressive Web App)
```bash
# Construir para producción
npm run build

# Desplegar en cualquier hosting estático
```

## 🎯 Arquitectura Multiplataforma

```
Bunn Productivity Mobile/
├── 📱 iOS (App Store)
├── 🤖 Android (Google Play)  
├── 🌐 PWA (Navegadores)
└── 💻 Web (Escritorio)
    └── Misma base de código (Ionic + React)
```

## ✨ Ventajas Multiplataforma

- **📊 Código Compartido**: >85% de código reutilizado entre plataformas
- **🎨 UI Consistente**: Componentes que se adaptan a cada OS
- **⚡ Performance**: Cercano a nativo mediante optimizaciones WebView
- **🔧 Mantenimiento**: Actualizaciones simultáneas en todas las plataformas

## 🔄 Flujo de Navegación

```
[Inicio] → [Dashboard Tareas] → [Resumen Diario]
                ↓
          [Pomodoro Timer] → [Trabajo] → [Descanso] → [Ciclo Completo]
```

## 🏗️ Estructura del Proyecto

```
src/
├── pages/
│   ├── Main/          # Pantalla de inicio
│   ├── Tasks/         # Gestión de tareas y progreso
│   ├── FinishD/       # Resumen del día
│   └── timer/         # Flujo Pomodoro completo
├── components/        # Componentes reutilizables
├── hooks/            # Custom React hooks
└── theme/            # Variables CSS y temas
```

## 📈 Métricas de Productividad

- **Progreso Diario**: Porcentaje basado en tareas completadas
- **Tiempo Enfocado**: Seguimiento de sesiones Pomodoro
- **Consistencia**: Streaks de días productivos
- **Estadísticas**: Análisis semanal y mensual

## 🤝 Contribución

```bash
# 1. Fork el proyecto
# 2. Crear feature branch (git checkout -b feature/AmazingFeature)
# 3. Commit cambios (git commit -m 'Add some AmazingFeature')
# 4. Push al branch (git push origin feature/AmazingFeature)
# 5. Abrir Pull Request
```

## 📄 Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

## 🐛 Reportar Issues

Encontraste un bug? [Abre un issue](https://github.com/mapuinblue/BunnProductivity-Mobile/issues) con los pasos para reproducirlo.

---

**¿Listo para ser más productivo?** 🚀 Descarga Bunn Productivity Mobile y transforma tu gestión de tareas diarias.
