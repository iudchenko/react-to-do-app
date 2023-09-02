import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { TasksProvider } from "./contexts/TasksContext";

function App() {
  return (
    <div className="h-screen dark:bg-slate-800 dark:text-slate-100 text-slate-950">
      <Header />
      <main className="flex flex-col p-5 max-w-2xl mx-auto">
        <TasksProvider>
          <AddTask />
          <TaskList />
        </TasksProvider>
      </main>
    </div>
  );
}

export default App;
