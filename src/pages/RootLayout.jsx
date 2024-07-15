
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollRestoration } from 'react-router-dom';
import Whatsapp from '../components/Whatsapp';

const RootLayout = ({ children }) => {
    return (
        <div>
            <Header />
            
            <Outlet /> {/* This is where the nested routes will be rendered */}
                
            <Footer />
            <Whatsapp />
        </div>
    );
}

export default RootLayout;
