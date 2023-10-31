
import React from "react";
import { Link } from "react-router-dom";


export default function ListOfTasks({ completed, name, taskID, deleteBtn, idx }) {
    return (
        <div className={`single-task ${completed && 'task-completed'}`}>
            <h5>
                <span><i className="far fa-check-circle"></i></span>{name}
            </h5>
            <div className="task-links">
                <Link 
                    to={`/edit.jsx/${taskID}`} 
                    className="edit-link"
                >
                    <i className="fas fa-edit"></i>
                </Link>
                <button 
                    type="button" 
                    className="delete-btn"
                    onClick={deleteBtn} 
                    data-id={taskID}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    )
}