import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

import { Dashboard } from '../Dashboard/Dashboard';

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
            </Routes>
        </BrowserRouter>
    );
}