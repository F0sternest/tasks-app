import React from "react";
import Task from "./Task";
import { useState } from "react";

function TaskForm() {
    let title = "";
    let description = "";
    const [taskList, setTaskList] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setTaskList([...taskList, createTask(title, description, taskList.length)]);
    };

    const handleChange = (event) => {
        event.target.id === "title"
            ? (title = event.target.value)
            : (description = event.target.value);
    };

    const createTask = (t, d, id) => {
        let task = {
            id: id,
            title: t,
            description: d,
        };

        return task;
    };

    return (
        <div className="form-container">
            <h2>Tareas</h2>
            <form onSubmit={handleSubmit}>
                <input
                    id="title"
                    placeholder={"Title"}
                    onChange={handleChange}
                />
                <textarea
                    id="description"
                    placeholder={"Description"}
                    onChange={handleChange}
                />
                <button>Add</button>
            </form>

            {taskList.length === 0 ? (
                <h3>There are no tasks</h3>
            ) : (
                taskList.map((task, index) => {
                    return <Task key={index} task={task} taskList={taskList} setTaskList={setTaskList}/>;
                })
            )}
        </div>
    );
}

export default TaskForm;
