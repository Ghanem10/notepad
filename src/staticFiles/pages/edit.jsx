
import React, { useEffect, useState } from "react";
import EditForm from "../jsx/structureCode/editSection";
import { Link, useSearchParams } from "react-router-dom";
import { ExternalLinksEdit } from '../jsx/structureCode/DomcumentStructure';
import axios from 'axios';

import '../jsx/css/edit.css';
import '../jsx/css/nav.css';


export default function Edit() {
    const [IncomingData, setIncomingData] = useState([]);
    const [verify, setVerify] = useState({ check: false });
    const [search, setSearch] = useSearchParams({ id: window.location.pathname });
    
    const URL = search.get('id');
    const id = URL.split('/').slice(-1)[0];


    function handleToggle() {
        const complete = IncomingData.completed;

        setIncomingData(preChange => {
            return { 
                ...preChange, 
                completed: !complete 
            }
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        const input = IncomingData.name;
        const complete = IncomingData.completed;

        await axios.patch(`${import.meta.env.VITE_URL}/api/v1/tasks/${id}`, { 
            name: input, 
            completed: complete 
        });
        
        setVerify({ check: true });

        setTimeout(() => {
            setVerify({ check: false });
        }, 2000);
    }

    function handleChange(e) {
        setIncomingData(preInputValue => {
            return { 
                ...preInputValue, 
                name: e.target.value 
            }
        });
    }

    useEffect(() => {
        const showInfoTask = async () => {
            const { 
                data: { task } 
            } = await axios.get(`${import.meta.env.VITE_URL}/api/v1/tasks/${id}`);
            setIncomingData(task);
        }
        
        showInfoTask();
    },[]);

    return (
        <main>
            <div className="container">
                {(typeof IncomingData === 'undefined') ? 
                (
                    'There is no data in here...'
                ) 
                :(
                    <EditForm
                        handleSubmit={(e) => handleSubmit(e)}
                        handleChange={(e) => handleChange(e)}
                        toggle={() => handleToggle()}
                        completed={IncomingData.completed}
                        data={verify.check}
                        taskID={IncomingData._id}
                        name={IncomingData.name}
                    /> 
                )}
                <Link to='/' className="btn back-link">back to tasks</Link>
            </div>
            <ExternalLinksEdit />
        </main>
    );
}