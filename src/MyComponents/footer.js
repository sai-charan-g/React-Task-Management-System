import React from 'react'

export const Footer = ({ todos = [] }) => {
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const active = total - completed;

  return (
    <footer className="navbar-custom py-3 mt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p className="text-center mb-0 text-light fw-semibold fs-6">
           Tasks Total: {total} &nbsp;&nbsp;|&nbsp;&nbsp; Active: {active} &nbsp;&nbsp;|&nbsp;&nbsp; Completed: {completed}
        </p>
    </footer>
  )
}
