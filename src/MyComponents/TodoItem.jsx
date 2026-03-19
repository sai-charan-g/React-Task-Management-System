import React, { useState } from 'react'

export const TodoItem = ({ todo, onDelete, onComplete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDesc, setEditDesc] = useState(todo.description);
  const [editDate, setEditDate] = useState(todo.dueDate || "");

  if (!todo) return null;

  const handleSave = () => {
    if (!editTitle || !editDesc) {
      alert("Title and description cannot be empty!");
      return;
    }
    onEdit(todo.sno, editTitle, editDesc, editDate);
    setIsEditing(false);
  };

  const getDueDateStatus = (dueDateString) => {
    if (!dueDateString) return null;
    
    const parts = dueDateString.split('-');
    const dueDate = new Date(parts[0], parts[1] - 1, parts[2]);
    dueDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return { class: "text-danger fw-bold", badge: "bg-danger", label: "OVERDUE" };
    } else if (diffDays === 0) {
      return { class: "text-warning fw-bold", badge: "bg-warning text-dark", label: "DUE TODAY" };
    } else if (diffDays === 1) {
      return { class: "text-warning", badge: "bg-warning text-dark", label: "DUE TOMORROW" };
    } else {
      return { class: "text-secondary", badge: "bg-secondary", label: "" };
    }
  };

  const status = !todo.completed ? getDueDateStatus(todo.dueDate) : null;

  return (
    <div className="todo-item p-3 mb-3" style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
      {isEditing ? (
        <div className="d-flex flex-column gap-2">
          <input 
            className="form-control form-control-custom" 
            value={editTitle} 
            onChange={(e) => setEditTitle(e.target.value)} 
            placeholder="Edit Title"
          />
          <textarea 
            className="form-control form-control-custom" 
            value={editDesc} 
            onChange={(e) => setEditDesc(e.target.value)} 
            rows="2"
            placeholder="Edit Description"
          />
          <input 
            type="date"
            className="form-control form-control-custom" 
            value={editDate} 
            onChange={(e) => setEditDate(e.target.value)} 
          />
          <div className="d-flex gap-2 justify-content-end mt-2">
            <button className="btn btn-sm btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
            <button className="btn btn-sm btn-success-custom px-3" onClick={handleSave}>Save</button>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-start gap-3 flex-grow-1">
            <input 
              type="checkbox" 
              className="custom-checkbox mt-1" 
              checked={todo.completed || false} 
              onChange={() => onComplete(todo)}
            />
            <div>
              <h5 className={`mb-1 ${todo.completed ? 'strike-title' : ''}`}>
                {todo.title}
                {status && status.label && (
                  <span className={`badge ${status.badge} ms-2 fs-6`} style={{verticalAlign: 'middle', marginTop: '-2px'}}>{status.label}</span>
                )}
              </h5>
              <p className={`mb-1 ${todo.completed ? 'strike-desc' : 'text-muted'}`}>
                {todo.description}
              </p>
              {todo.dueDate && (
                <small className={`fw-semibold ${status ? status.class : 'text-secondary'}`}>
                  Due: {new Date(todo.dueDate).toLocaleDateString()}
                </small>
              )}
            </div>
          </div>
          
          <div className="d-flex gap-2 ms-3">
             <button title="Edit" className="btn btn-sm btn-success-custom" onClick={() => setIsEditing(true)}>Edit</button>
             <button title="Delete" className="btn btn-sm btn-danger-custom" onClick={() => onDelete(todo)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  )
}