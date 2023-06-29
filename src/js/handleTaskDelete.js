const handleTaskDelete = (taskId, tasks, setTasks) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
};

export default handleTaskDelete;
