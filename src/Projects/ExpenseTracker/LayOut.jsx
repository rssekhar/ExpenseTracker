
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Income from "./Pages/Income";
import Expense from "./Pages/Expense";
import NoPageFound from "./Pages/NoPageFound";

import Header from './Header'

import Register from './Auth/Register'
import Login from './Auth/Login'
import LogOut from './Auth/LogOut'
import PrivateRoute from "./Auth/PrivateRoute";

export default function LayOut() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/home" element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>} />
                    <Route path="/income" element={
                        <PrivateRoute>

                            <Income />
                        </PrivateRoute>} />
                    <Route path="/expense" element={
                        <PrivateRoute>
                            <Expense />
                        </PrivateRoute>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={
                        <PrivateRoute>
                            <LogOut />
                        </PrivateRoute>} />
                    <Route path="*" element={<NoPageFound />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}