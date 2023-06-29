import { useState } from 'react';
import Search from '../assets/icons/Search';
import Circle from '../assets/icons/Circle';
import Trash from '../assets/icons/Trash';
import Done from '../assets/icons/Done';

const List = () => {

    // states
    const [tasks, setTasks] = useState([]);
    const [inputText, setInputText] = useState('');
    const [searchText, setSearchText] = useState('');

    // method to handle input change
    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    // method to handle search change
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    // method to add new tasks in list
    const handleTaskSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() !== '') {
            const newTask = {
                id: Date.now(),
                text: inputText,
                completed: false,
            };
            setTasks([...tasks, newTask]);
            setInputText('');
        }
    };

    // method to update list
    const handleTaskComplete = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    // method to delete tasks from list
    const handleTaskDelete = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    // method to filter task according to search query
    const filteredTasks = tasks.filter((task) =>
        task.text.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className='w-[25vw] h-auto m-auto mt-[10vh] bg-[white] shadow-md shadow-primaryColor rounded-md'>
            <div className='bg-primaryColor p-5 text-center curve'>
                <h1 className='whiteColor text-lg font-semibold'>Thu, June 29, 2023</h1>
                <p className='whiteColor text-md font-medium mt-1'>6 tasks</p>
            </div>
            <form onSubmit={handleTaskSubmit} className='px-5 mt-4'>
                <div className='flex justify-center space-x-4 pt-2'>
                    <div>
                        <input
                            type="text"
                            placeholder="Add new task"
                            value={inputText}
                            onChange={handleInputChange}
                            className='py-1 px-2 mt-2 border-2 border-primaryColor rounded-md focus:outline-none'
                        />
                    </div>
                    <div>
                        <button className="btn btn-circle bg-primaryColor whiteColor text-2xl font-medium" type='submit'>+</button>
                    </div>
                </div>
            </form>
            <div className='flex px-5 mt-4'>
                <div className='relative px-5'>
                    <span className='absolute inset-y-0 left-0 pl-6 flex items-center'>
                        <Search className='text-textColor' />
                    </span>
                    <input
                        type='text'
                        placeholder='Search tasks'
                        className='py-1 pl-10 pr-2 border-2 border-primaryColor rounded-md focus:outline-none'
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <ul className='mt-5 mb-5 px-5 py-3'>
                {filteredTasks.map((task) => (
                    <div className='flex justify-between px-5 mb-5' key={task.id}>
                        <div>
                            {!task.completed ? <li className='text-[18px]' key={task.id}>{task.text}</li> : <li className='text-[18px] text-[#86959E]' key={task.id}>{task.text}</li>}
                        </div>
                        <div className='flex space-x-1'>
                            <div onClick={() => handleTaskComplete(task.id)}>
                                {task.completed ? <Done /> : <Circle />}
                            </div>
                            <div onClick={() => handleTaskDelete(task.id)}>
                                <Trash />
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default List;