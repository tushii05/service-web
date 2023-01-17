import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">Left</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="//codeply.com">Codeply</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                    </ul>
                </div>
                <div className="mx-auto order-0">
                    <Link className="navbar-brand mx-auto" to="#">Navbar 2</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Right</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default nav;