# project-task-manager-react-app
A simple task and project management application built with **React**. This app allows users to create and manage projects, add tasks to those projects, and handle project/task deletion. The state is persisted using **localStorage**, ensuring that your projects and tasks remain saved even after refreshing the browser.

## Features
- **Project Management**: Add, delete, and manage multiple projects.
- **Task Management**: Add and delete tasks within a project.
- **State Persistence**: Uses `localStorage` to persist data, so your projects and tasks remain even after refreshing the page.
- **Toast Notifications**: Provides feedback using **React Toastify** for actions like adding or deleting tasks and projects.

## Technologies Used
- **React**: Front-end library for building the user interface.
- **localStorage**: For storing project and task data persistently in the browser.
- **React Toastify**: For toast notifications on user actions.
- **Tailwind CSS** (optional): For styling the UI (if used in your project).
  
## Getting Started

To get a local copy of the project and run it, follow the steps below.

## Installation and Setup

To run these apps locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ShawonBarman/project-task-manager-react-app.git
   cd project-task-manager-react-app
   ```

2. **Install dependencies:**

   Make sure you have Node.js and npm installed.

   ```bash
   npm install
   ```

3. **Run the applications:**

   ```bash
   npm start
   ```

This will start the app at http://localhost:3000.

## Folder Structure

```
  src/
  │
  ├── components/
  │   ├── Button.jsx
  │   ├── Input.jsx
  │   └── Modal.jsx
  │   └── NewProjects.jsx
  │   └── NewTask.jsx
  │   └── NoProjectSelected.jsx
  │   └── ProjectSideBar.jsx
  │   └── SelectedProject.jsx
  │   └── Tasks.jsx
  │
  ├── App.jsx               # Main application component
  └── index.css             # Styling for the app
  └── index.js
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
