import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../commponents/Navber';

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navber></Navber>
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;