import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../commponents/Navber';
import Footer from '../commponents/Footer';

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navber></Navber>
            </div>

            <div className='min-h-[70vh]'>
            <Outlet></Outlet>
            </div>
            <div className='pt-10'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;