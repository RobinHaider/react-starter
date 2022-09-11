import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './app/dashboard/Dashboard';
import Forms from './pages/examples/Forms';
import HomePage from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';

type Props = {};

const RoutesComponent = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<HomePage />}></Route>
          <Route path="examples/forms" element={<Forms />}></Route>
        </Route>
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
