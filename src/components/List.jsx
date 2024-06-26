import { useState } from "react";
import Search from "../assets/icons/Search";
import Circle from "../assets/icons/Circle";
import Trash from "../assets/icons/Trash";
import Done from "../assets/icons/Done";
import handleTaskSubmit from "../js/handleTaskSubmit";
import handleTaskComplete from "../js/handleTaskComplete";
import handleTaskDelete from "../js/handleTaskDelete";
import useListEffects from "../js/useListEffects";

const List = () => {
  // states
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [taskCount, setTaskCount] = useState(0);

  // method to add new tasks in list
  const handleTaskSubmission = (e) => {
    handleTaskSubmit(e, inputText, setInputText, tasks, setTasks);
  };

  // method to handle task completion
  const handleCompleteTask = (taskId) => {
    handleTaskComplete(taskId, tasks, setTasks);
  };

  // method to delete tasks from list
  const handleDeleteTask = (taskId) => {
    handleTaskDelete(taskId, tasks, setTasks);
  };

  // for current date and count
  useListEffects(tasks, setTaskCount, setCurrentDate);

  // method to filter task according to search query
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="w-[80vw] mt-[20vh] sm:w-[40vw] lg:w-[25vw] h-auto m-auto lg:mt-[10vh] bg-[white] shadow-md shadow-primaryColor rounded-md">
      <div className="bg-primaryColor p-5 text-center curve">
        <h1 className="whiteColor text-lg font-semibold">{currentDate}</h1>
        <p className="whiteColor text-md font-medium mt-1">
          {" "}
          {taskCount} {taskCount === 1 ? "task" : "tasks"}
        </p>
      </div>
      <form onSubmit={handleTaskSubmission} className="px-5 mt-4">
        <div className="flex justify-center space-x-4 pt-2">
          <div>
            <input
              type="text"
              placeholder="Add new task"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
              className="w-[50vw] sm:w-[25vw] lg:w-full py-1 px-2 mt-2 border-2 border-primaryColor rounded-md focus:outline-none"
            />
          </div>
          <div>
            <button
              className="btn btn-circle bg-primaryColor whiteColor text-2xl font-medium"
              type="submit"
            >
              +
            </button>
          </div>
        </div>
      </form>
      <div className="flex px-5 mt-4">
        <div className="relative lg:px-5">
          <span className="absolute inset-y-0 left-0 pl-1 lg:pl-6 flex items-center">
            <Search className="text-textColor" />
          </span>
          <input
            type="text"
            placeholder="Search tasks"
            className="w-[70vw] sm:w-[33vw] lg:w-full py-1 pl-10 pr-2 border-2 border-primaryColor rounded-md focus:outline-none"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
      </div>
      <ul className="mt-5 mb-5 px-5 py-3">
        {filteredTasks.map((task) => (
          <div className="flex justify-between px-5 mb-5" key={task.id}>
            <div>
              {!task.completed ? (
                <li className="text-[18px]" key={task.id}>
                  {task.text}
                </li>
              ) : (
                <li className="text-[18px] text-[#86959E]" key={task.id}>
                  {task.text}
                </li>
              )}
            </div>
            <div className="flex space-x-1">
              <div onClick={() => handleCompleteTask(task.id)}>
                {task.completed ? <Done /> : <Circle />}
              </div>
              <div onClick={() => handleDeleteTask(task.id)}>
                <Trash />
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
