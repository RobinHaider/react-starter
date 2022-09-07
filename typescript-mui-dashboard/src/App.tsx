import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './app/dashboard/Dashboard';
import RoutesComponent from './Routes';

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            {/* The rest of your application */}
            <RoutesComponent />
        </React.Fragment>
    );
}

export default App;
