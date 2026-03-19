# Modern React To-Do List

A fully featured, aesthetically pleasing To-Do List application built with **React**. Designed with a premium Glassmorphism UI theme to boost productivity and provide a premium user experience.

##  Features

- **Persistent Data:** Leverages your browser's `localStorage` so your tasks, edits, and completions survive hard tab closures and refreshes.
- **Smart Auto-Sorting:** Built-in algorithmic sorting ensures overdue tasks bubble to the absolute top, while completed tasks elegantly sink to the bottom.
- **Dynamic Due Dates:** Set specific due dates via a native calendar picker. The app runs comparative date math to apply red `OVERDUE` or yellow `DUE TODAY` warning badges when deadlines approach.
- **Live Search & Filtering:** Instantly filter your active tasks by their titles or descriptions directly from the top navigation bar.
- **Task Management Modes:** Native inline-editing capabilities allow you to seamlessly correct typos, inject due dates, or modify task scopes without deleting to recreate them.
- **Client-Side Routing:** Utilizes `react-router-dom` to dynamically swap between your active To-Do dashboard and the informational About page without triggering a full browser refresh.
- **Clear Macros:** Need to clean up? A conditional "Clear Completed" button safely sweeps away all checked-off tasks with one click.

##  Technology Stack

- **Core Framework:** React (State, Effects, Array Mapping, Props)
- **Client Routing:** React Router DOM v6
- **Layout Engine:** Bootstrap 5 Grids & Utilities
- **Styling Architecture:** Vanilla CSS (Tailored Glassmorphism, CSS Variables, Translucency Filters)
- **Data Persistence:** Browser LocalStorage API

##  Getting Started

First, ensure you have [Node.js](https://nodejs.org/) installed. 

1. **Clone the repository:** 
   ```bash
   git clone https://github.com/your-username/react-task-manager.git
   ```
2. **Navigate into the directory:**
   ```bash
   cd react-task-manager
   ```
3. **Install the dependencies:**
   ```bash
   npm install
   ```
4. **Start the local development server:**
   ```bash
   npm start
   ```
5. **Open your browser:** Navigate to [http://localhost:3000](http://localhost:3000) to view the application running live!
