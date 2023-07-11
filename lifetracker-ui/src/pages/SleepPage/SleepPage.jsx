import "./SleepPage.css"
import SleepForm from "../../components/SleepForm/SleepForm"
import { useEffect } from 'react'
import axios from 'axios'

export default function SleepPage({setAppState, appState}) {

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            // here, we make a post to get relevent data
            let relevantData = axios.get('http://localhost:3001/sleep', token)
        }
    }, [])

    return (
       // use relevant data to hydrate the webpage
        <div className="registration-page">
            <SleepForm setAppState={setAppState} appState={appState}/>
        </div>
    )
}