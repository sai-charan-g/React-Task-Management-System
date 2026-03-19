import React from 'react';

export const About = () => {
  return (
    <div className="container mt-4">
      <div className="glass-panel p-5" style={{ minHeight: '60vh' }}>
        <h2 className="mb-4 fw-bold">About This App</h2>
        <p className="fs-5" style={{ color: '#cbd5e1' }}>This is a fully featured, aesthetically pleasing To-Do List built with React.</p>
        <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>It supports persistent local storage, interactive editing, toggling completions, and seamless routing. Designed with a gorgeous glassmorphism UI theme to boost productivity and provide a premium user experience.</p>
        <div className="mt-5 p-4 rounded" style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
          <strong className="fs-5" style={{ color: '#a78bfa' }}> State-of-the-Art Features:</strong>
          <ul className="mb-0 mt-3 list-unstyled d-flex flex-column gap-3">
            <li><strong className="text-light">  Good UI</strong> - Dark mode gradients and hover scaling</li>
            <li><strong className="text-light"> React Hooks</strong> - Powerful state and side-effect management</li>
            <li><strong className="text-light"> Data Persistence</strong> - Saving directly to your browser's local memory</li>
            <li><strong className="text-light"> Task Tools</strong> - Native data editing and checking-off without remaking tasks</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
