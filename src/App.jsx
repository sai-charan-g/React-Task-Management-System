import './App.css';
import { useState, useEffect } from 'react';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/todos";
import { Footer } from "./MyComponents/footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e.sno !== todo.sno));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((e) => !e.completed));
  };

  const toggleComplete = (todo) => {
    setTodos(
      todos.map((t) => {
        if (t.sno === todo.sno) {
          return { ...t, completed: !t.completed };
        }
        return t;
      })
    );
  };

  const editTodo = (sno, newTitle, newDesc, newDueDate) => {
    setTodos(
      todos.map((t) => {
        if (t.sno === sno) {
          return { ...t, title: newTitle, description: newDesc, dueDate: newDueDate };
        }
        return t;
      })
    );
  };

  const addTodo = (title, description, dueDate) => {
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      description: description,
      dueDate: dueDate || null,
      completed: false
    };
    setTodos([...todos, myTodo]);
  };

  const filteredTodos = todos.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    if (!a.dueDate && b.dueDate) return 1;
    if (a.dueDate && !b.dueDate) return -1;
    if (!a.dueDate && !b.dueDate) return 0;
    const dateA = new Date(a.dueDate).getTime();
    const dateB = new Date(b.dueDate).getTime();
    return dateA - dateB;
  });

  return (
    <Router>
      <Header title="My To-Do" searchbar={true} onSearch={setSearchQuery} />
      <Routes>
        <Route exact path="/" element={
          <div className="container mt-4">
            <div className="row justify-content-center">
              <div className="col-md-5 mb-4">
                <AddTodo addTodo={addTodo} />
              </div>
              <div className="col-md-7">
                <Todos 
                  todos={sortedTodos} 
                  onDelete={onDelete} 
                  onComplete={toggleComplete} 
                  onEdit={editTodo} 
                  onClearCompleted={clearCompleted}
                  hasCompletedTasks={todos.some(t => t.completed)}
                />
              </div>
            </div>
          </div>
        } />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer todos={todos} />
    </Router>
  );
}

export default App;
