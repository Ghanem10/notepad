
import React from "react";

export default function EditForm(props) {
    return (
            <form className="single-task-form" onSubmit={props.handleSubmit}>
                <h4>Edit Task</h4>
                <div className="form-control">
                    <label>Task ID</label>
                    <p className="task-edit-id">{props.taskID}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="name">Task</label>
                    <input 
                        type="text" 
                        name="name" 
                        className="task-edit-name" 
                        value={props.name} 
                        onChange={props.handleChange}    
                     />
                </div>
                <div className="form-control">
                    <label htmlFor="completed">completed</label>
                    <input 
                        type="checkbox" 
                        name="completed" 
                        className="task-edit-completed" 
                        checked={props.completed} 
                        onChange={props.toggle}    
                    />
                </div>
                <button 
                    type="submit" 
                    className="block btn task-edit-btn"
                    >
                    edit
                </button>
                {(props.data === true) ? (
                    <div 
                        className="form-alert text-success" 
                        style={{
                            display: 'block'
                        }}
                    >Success, Task edited</div>
                ):(
                    <div 
                        className="form-alert" 
                        style={{
                            display: 'none'
                        }}
                    ></div>
                )}
            </form>
    );
}