import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

import { Dashboard } from '../Pages/Dashboard';
import { DashboardLoggedIn } from '../Pages/DashboardLoggedIn';
import { FuelQuoteForm } from '../Pages/FuelQuoteForm';
import { FuelQuoteHistory } from '../Pages/FuelQuoteHistory';
import { UserAccount } from '../Pages/UserAccount';
import { UserRegistrationFirst } from '../Pages/UserRegistrationFirst';
import { UserRegistrationSecond } from '../Pages/UserRegistrationSecond';

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/DashboardLoggedIn" element={<DashboardLoggedIn />}></Route>
                <Route path="/FuelQuoteForm" element={<FuelQuoteForm />}></Route>
                <Route path="/FuelQuoteHistory" element={<FuelQuoteHistory />}></Route>
                <Route path="/UserAccount" element={<UserAccount />}></Route>
                <Route path="/UserRegistrationFirst" element={<UserRegistrationFirst />}></Route>
                <Route path="/UserRegistrationSecond" element={<UserRegistrationSecond />}></Route>
            </Routes>
        </BrowserRouter>
    );
}