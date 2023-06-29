const handleTaskComplete = (taskId, tasks, setTasks) => {
    const updatedTasks = tasks.map((task) => {
        if (task.id === taskId) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    setTasks(updatedTasks);
};

export default handleTaskComplete;
