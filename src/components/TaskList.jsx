import { useTasks } from "../contexts/TasksContext";
import Task from "./Task";

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul className="flex flex-col gap-2 overflow-scroll">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="py-2 px-5 bg-slate-100 dark:bg-slate-700 rounded-lg"
        >
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
