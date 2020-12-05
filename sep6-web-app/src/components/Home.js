import React from "react";
import { Link } from "react-router-dom";

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './AppNavbar'
import axios from 'axios';


const Home = () => {
    axios.post(`https://flightfunctionplan.azurewebsites.net/api/FlightsAPI?code=yDn2pitXFmcoD4q6Lg5j6dYp3I3U6KO2iOGtTbv6koOqYiiangAWHA==`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })



    return (

        <div>
            <AppNavbar />
            <p>Home page</p>
        </div>

    );
};

export default Home;