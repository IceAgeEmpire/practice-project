import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../styles/App.css'
export default function Navigation() {
    const getActiveStyle = (isActive) => (isActive ? { color: "white", backgroundColor: "#2B2B2B" } : {});

    return (
        <nav className="navigation-bar">
            <div>
                <ul>
                    <li>
                        <NavLink
                            style={({ isActive }) => getActiveStyle(isActive)}
                            className="link"
                            to="/toDoList"
                        >
                            To Do List
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={({ isActive }) => getActiveStyle(isActive)}
                            className="link"
                            to="/records"
                        >
                            Records
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Link className="link" to="/login">Logout</Link>
        </nav>
    );
}
