import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Layout from '~/components/Layout/DefaultLayout/Layout';

import Home from './pages/Home/Home.js'
import ClassList from './pages/ClassList/ClassList'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Personal_info from './pages/personal_info/index.js';
import ListTutor from './pages/ListTutor/index.js';

function App() {
    return (

        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/classlist" element={<ClassList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/personal_info" element={<Personal_info />} />
                <Route path="/tutorlist" element={<ListTutor />} />
            </Routes>
        </Layout >

    );
}

export default App;
