import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

import { Dashboard } from '../Dashboard/Dashboard';
import { DashboardLoggedIn } from '../DashboardLoggedIn/DashboardLoggedIn';
import { FuelQuoteForm } from '../FuelQuoteForm/FuelQuoteForm';
import { FuelQuoteHistory } from '../FuelQuoteHistory/FuelQuoteHistory';
import { UserAccount } from '../UserAccount/UserAccount';
import { UserRegistrationFirst } from '../UserRegistrationFirst/UserRegistrationFirst';
import { UserRegistrationSecond } from '../UserRegistrationSecond/UserRegistrationSecond';

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