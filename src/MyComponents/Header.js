import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4 d-flex align-items-center" to="/">
          <img src="/favicon.svg" alt="Logo" width="28" height="28" className="me-2" />
          {props.title}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style={{borderColor: 'rgba(255,255,255,0.2)'}}>
          <span className="navbar-toggler-icon" style={{filter: 'invert(1)'}}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fs-5 mx-2" aria-current="page" to="/">Tasks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 mx-2" to="/about">About</Link>
            </li>
          </ul>
          {props.searchbar ? (
            <form className="d-flex ms-auto" role="search" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="form-control form-control-custom me-2" 
                type="search" 
                placeholder="Search Tasks..." 
                aria-label="Search"
                onChange={(e) => props.onSearch(e.target.value)}
              />
            </form>
          ) : null}
        </div>
      </div>
    </nav>
  )
}
Header.defaultProps = { title: "My Todos List", searchbar: true }