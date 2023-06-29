const handleTaskSubmit = (e, inputText, setInputText, tasks, setTasks) => {
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

export default handleTaskSubmit;
