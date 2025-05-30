import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? "Loading....." : <Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Home;