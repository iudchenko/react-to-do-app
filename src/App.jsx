import { Toaster } from "react-hot-toast";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { TasksProvider } from "./contexts/TasksContext";

function App() {
  return (
    <div className="h-full min-h-screen dark:bg-slate-800 dark:text-slate-100 text-slate-950">
      <Header />
      <main className="flex flex-col px-5 pt-5 pb-20 max-w-2xl mx-auto">
        <TasksProvider>
          <AddTask />
          <TaskList />
          <Toaster position="top-center" reverseOrder={false} />
        </TasksProvider>
      </main>

      <Footer />
    </div>
  );
}

export default App;
