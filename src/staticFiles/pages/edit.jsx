
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

    async function showInfoTask() {
        const { 
            data: { 
            task
        } 
    } = await axios.get(`/api/v1/tasks/${id}`);
        setIncomingData(task);
    }

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

        await axios.patch(`/api/v1/tasks/${id}`, { 
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
        
        async function call() {
            await showInfoTask();
        }
        call();

    },[])

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