export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
    const handleDelete = (id) => {
        const updatedList = taskList.filter((elem) => elem.id !== id);
        setTaskList(updatedList);
    }

    const handleEdit = (id) => {
        const selectedTask = taskList.find((elem) => elem.id === id);
        setTask(selectedTask);
    }
    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{taskList.length}</span>
                </div>
                <button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
            </div>
            <ul>
                {taskList.map((todo) => (
                    <li key={todo.id}>
                        <p>
                            <span className="name">{todo.name}</span>
                            <span className="time">{todo.time}</span>
                        </p>
                        <i className="bi bi-pencil-square" onClick={() => handleEdit(todo.id)}></i>
                        <i className="bi bi-trash3-fill" onClick={() => handleDelete(todo.id)}></i>
                    </li>
                ))}
            </ul>
        </section>
    )
}