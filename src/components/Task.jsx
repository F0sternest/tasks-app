import React from "react";

function Task({ task, taskList, setTaskList }) {
    const deleteTask = (id) => {
        setTaskList(taskList.filter((task) => task.id != id));
    };

    return (
        <div className="task-container">
            <div className="info-container">
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </div>
            <div className="button-container">
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </div>
    );
}

export default Task;
