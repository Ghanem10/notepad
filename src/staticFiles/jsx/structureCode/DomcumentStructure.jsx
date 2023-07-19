
import React from "react";
import { Link } from "react-router-dom";

export function NavWeather() {
    return (
        <header>
            <nav>
                <h4>
                    <Link to='/' id="a">
                        Task Manager
                    </Link>
                </h4>
            </nav>
        </header>
    );
}

export function NavTaskManager() {
    return (
        <header>
            <nav>
                <h4><Link to="/" id="a">Task Manager</Link></h4>
            </nav>
        </header>
    );
}

export function FormData({ handleSubmit, handleChange, name, verify }) {
    return (
        <form onSubmit={handleSubmit} className="task-form">
            <h5>Tasks List</h5>
            <div className="from-control">
                <input 
                    className="task-input" 
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder="Enter new Task..." 
                />
                <button 
                    className="btn submit-btn" 
                    type="submit"
                    >
                    Add Task
                </button>
                {(verify === true) ? 
                (
                    <div 
                        style={{
                            display: 'block'
                        }}
                        className="form-alert text-success"
                    >
                        Success, Task Added
                    </div>
                ) : (
                    <div 
                        style={{
                            display: 'none'
                        }}
                        className="form-alert"
                    >
                    </div>
                )}
            </div>
        </form>
    );
}

export function ExternalLinks() {
    return (
        <div>
            <title>Task Manager</title>
            <link rel="shortcut icon" href="/task-management-icon-23.png" type="image/x-icon" />
            <link rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"></link>
        </div>
    )
}

export function ExternalLinksEdit() {
    return (
        <div>
            <title>Edit Page</title>
            <link rel="shortcut icon" href="/task-management-icon-23.png" type="image/x-icon" />
            <link rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"></link>
        </div>
    )
}