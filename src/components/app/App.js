import '../../assets/css/App.css';

import React from 'react';
import NotFound from './NotFound';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from '../auth/PrivateRoute';
import UserProfile from "../users/UserProfile";

import '../../assets/css/App.css';

function App({ accesGranted }) {

    return (
        <div className="App">
            <Routes>

                <Route path="/" 
                    element={
                        <PrivateRoute accesGranted={ accesGranted }>
                            <UserProfile accesGranted={ accesGranted }/>
                        </PrivateRoute>
                    } 
                />

                <Route path="/404" element={ <NotFound /> } />

                <Route path="*" element={ <Navigate to="/404" /> } />

            </Routes>
        </div>
    )
}

export default App;
