
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavWeather, FormData, ExternalLinks } from '../jsx/structureCode/DomcumentStructure';
import ListOfTasks from "../jsx/structureCode/ListOfTasks";

import '../jsx/css/main.css';

export default function Main() {
    const [name, setName] = useState('');
    const [getData, setGetData] = useState([]);
    const [verify, setVerify] = useState({ verify: false });

    async function callBackEnd() {
        const { 
            data: { 
            tasks 
        } 
    } = await axios.get('/api/v1/tasks')
        setGetData(tasks);
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        await axios.post('/api/v1/tasks', { name });
        setName('');
        callBackEnd();

        setVerify({ verify: true });
        setTimeout(() => {
            setVerify({ verify: false });
        }, 2000);
    }

    async function deleteBtn(e) {
        const el = e.target;

        if (el.parentElement.classList.contains('delete-btn')){
            const id = el.parentElement.dataset.id;

            await axios.delete(`/api/v1/tasks/${ id }`);
            callBackEnd();
        }
    }

    useEffect(() => {
        callBackEnd();
    }, []);

    return (
        <main>
            <NavWeather />
            <div className="container-main">
                <div className="form-container">
                    <FormData 
                        handleSubmit={(e) => handleSubmit(e)}
                        handleChange={(e) => handleChange(e)}
                        name={name}
                        verify={verify.verify}
                    />
                </div>
                <section className="tasks-container">
                    <p className="loading-text"></p>
                    <div className="tasks">
                    {(getData.length < 1) ? 
                    (
                        'There is no Tasks in Queue...'
                    ) : (
                        getData.map((item, id) => {
                        const { completed, name, _id: taskID } = item;
                        return (
                          <ListOfTasks 
                            key={id}
                            completed={completed}
                            name={name}
                            taskID={taskID}
                            deleteBtn={(e) => deleteBtn(e)}
                          />  
                        );
                    }))}
                    </div>
                </section>
            </div>
            <ExternalLinks />
        </main>
    );
}