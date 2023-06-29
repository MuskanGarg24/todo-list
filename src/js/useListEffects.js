import { useEffect } from 'react';

const useListEffects = (tasks, setTaskCount, setCurrentDate) => {
    useEffect(() => {
        const today = new Date();
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        }).format(today);

        const count = tasks.length;

        setCurrentDate(formattedDate);
        setTaskCount(count);
    }, [tasks]);
};

export default useListEffects;
