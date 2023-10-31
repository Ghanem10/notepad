
import React, { useEffect } from "react";
import MainPage from "./router";
import axios from "axios";

function App() {

    useEffect(() => {
        const callAPI = async () => {
            await axios.get(`${import.meta.env.VITE_URL}/test`);
        }

        callAPI();
    }, []);
    
    return(
        <MainPage />
    );
}

export default App;