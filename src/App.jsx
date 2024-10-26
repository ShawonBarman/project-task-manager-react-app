import { useState, useEffect } from "react";
import NewProjects from "./components/NewProjects";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import { toast } from 'react-toastify';
import SelectedProject from "./components/SelectedProject";

function App() {
  // Initialize state from localStorage or fallback to default
  const [projectsState, setProjectsState] = useState(() => {
    const savedProjects = localStorage.getItem('projectsState');
    return savedProjects ? JSON.parse(savedProjects) : {
      selectedProject: undefined,
      projects: [],
      tasks: []
    };
  });

  // Save projectsState to localStorage whenever it changes
  useEffect(() => {
    if (projectsState.projects.length > 0 || projectsState.tasks.length > 0) {
      localStorage.setItem('projectsState', JSON.stringify(projectsState));
    }
  }, [projectsState]);

  const handleAddTask = (text) => {
    setProjectsState((prevProjectsState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevProjectsState.selectedProject,
        taskId: taskId,
      };
      return {
        ...prevProjectsState,
        tasks: [...prevProjectsState.tasks, newTask]
      };
    });

    toast.success("Task added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const handleDeleteTask = (taskId) => {
    setProjectsState(prevProjectsState => {
      return {
        ...prevProjectsState,
        tasks: projectsState.tasks.filter((task) => task.taskId !== taskId)
      };
    });
  }

  const handleStartAddProject = () => {
    setProjectsState(prevProjectsState => {
      return {
        ...prevProjectsState,
        selectedProject: null,
      };
    });
  }

  const handleCancelButton = () => {
    setProjectsState(prevProjectsState => {
      return {
        ...prevProjectsState,
        selectedProject: undefined,
      };
    });
  }

  const handleProjectData = (projectData) => {
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId,
    }
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProject: undefined,
        projects: [...prevProjectsState.projects, newProject]
      };
    });

    toast.success("Project added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const handleSelectProject = (id) => {
    setProjectsState(prevProjectsState => {
      return {
        ...prevProjectsState,
        selectedProject: id,
      };
    });
  }

  const handleDeleteButton = () => {
    setProjectsState((prevProjectsState) => {
      // Remove the selected project from the projects array
      const updatedProjects = prevProjectsState.projects.filter(
        (project) => project.id !== prevProjectsState.selectedProject
      );
  
      // Remove tasks related to the deleted project
      const updatedTasks = prevProjectsState.tasks.filter(
        (task) => task.projectId !== prevProjectsState.selectedProject
      );
  
      // Return the updated state with the project removed
      const updatedState = {
        ...prevProjectsState,
        selectedProject: undefined,  // Deselect project
        projects: updatedProjects,   // Update projects array
        tasks: updatedTasks,         // Update tasks array
      };
  
      // Save the updated state to localStorage
      localStorage.setItem("projectsState", JSON.stringify(updatedState));
  
      return updatedState;  // Return the new state
    });
  
    // Show success toast
    toast.success("Project deleted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProject)

  let content = <SelectedProject tasks={projectsState.tasks} project={selectedProject} handleDeleteButton={handleDeleteButton} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask} />;

  if (projectsState.selectedProject === null){
    content = <NewProjects handleCancelButton={handleCancelButton} handleProjectData={handleProjectData} />
  }
  else if (projectsState.selectedProject === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen flex gap-8">
      <ProjectSideBar handleSelectProject={handleSelectProject} onStartAddProject={handleStartAddProject} projects={projectsState.projects} selectedProjectID={projectsState.selectedProject} />
      {content}
    </main>
  );
}

export default App;