import React from 'react'
import { TodoItem } from "./TodoItem"

export const Todos = ({ todos = [], onDelete, onComplete, onEdit, onClearCompleted, hasCompletedTasks }) => {
  return (
    <div className="glass-panel p-4" style={{minHeight: '60vh'}}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">Your Tasks</h4>
        {hasCompletedTasks && (
          <button className="btn btn-sm btn-danger-custom px-3 py-2 fw-semibold" onClick={onClearCompleted}>
            Clear Completed
          </button>
        )}
      </div>
      
      {todos.length === 0 ? (
        <div className="text-center py-5 text-muted">
           <h5 style={{color: '#94a3b8'}}>No tasks match this view.</h5>
           <p>Add a new task or adjust your search.</p>
        </div>
      ) : (
        todos.map((todo) => {
          return (
            <TodoItem 
              todo={todo} 
              key={todo.sno} 
              onDelete={onDelete} 
              onComplete={onComplete}
              onEdit={onEdit}
            />
          )
        })
      )}
    </div>
  )
}