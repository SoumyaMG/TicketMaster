import React from 'react'
import {Link} from 'react-router-dom'

function TopNav(props)
{
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary mb-4">
        <Link className="navbar-brand" to="/">Ticket Master</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
              {
                (localStorage.getItem('token'))?(
                  <div className="collapse navbar-collapse " id="navbarNavDropdown" >
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/customers">Customers <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/departments">Departments <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/employees">Employees <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/tickets">Tickets <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/users/account">Account <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/users/logout">Logout <span className="sr-only">(current)</span></Link>
                      </li>
                  </div>
                ):(
                  <div className="collapse navbar-collapse" id="navbarNavDropdown" >
                    <li className="nav-item active">
                      <Link className="nav-link" to="/users/register">Register <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/users/login">Login <span className="sr-only">(current)</span></Link>
                    </li>
                  </div>
                )
              }
          </ul>
        </div>
      </nav>
        </div>
    )
}

export default TopNav