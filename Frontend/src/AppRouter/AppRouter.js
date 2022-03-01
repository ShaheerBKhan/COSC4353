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
                <Route path="/DashboardLoggedIn/:userId" element={<DashboardLoggedIn />}></Route>
                <Route path="/FuelQuoteForm/:userId" element={<FuelQuoteForm />}></Route>
                <Route path="/FuelQuoteHistory/:userId" element={<FuelQuoteHistory />}></Route>
                <Route path="/UserAccount/:userId" element={<UserAccount />}></Route>
                <Route path="/UserRegistrationFirst" element={<UserRegistrationFirst />}></Route>
                <Route path="/UserRegistrationSecond/:userId" element={<UserRegistrationSecond />}></Route>
            </Routes>
        </BrowserRouter>
    );
}