import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [dueDate, setDueDate] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        } else {
            addTodo(title, desc, dueDate);
            setTitle("");
            setDesc("");
            setDueDate("");
        }
    }

    return (
        <div className="glass-panel p-4">
            <h4 className="mb-4 fw-bold">Create New Task</h4>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label text-light">Title</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="form-control form-control-custom" 
                        id="title" 
                        placeholder="What needs to be done?"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label text-light">Description</label>
                    <textarea 
                        rows="3"
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)} 
                        className="form-control form-control-custom" 
                        id="desc" 
                        placeholder="Add some details..."
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="dueDate" className="form-label text-light">Due Date (Optional)</label>
                    <input 
                        type="date" 
                        value={dueDate} 
                        onChange={(e) => setDueDate(e.target.value)} 
                        className="form-control form-control-custom" 
                        id="dueDate" 
                    />
                </div>
                <button type="submit" className="btn btn-primary-custom w-100 py-2 fs-5">Add Task</button>
            </form>
        </div>
    )
}
