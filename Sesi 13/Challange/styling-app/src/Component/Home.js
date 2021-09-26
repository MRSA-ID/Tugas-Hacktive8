import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';
import { Redirect } from 'react-router';

function Home({ authorized }){
    if(!authorized){
        return <Redirect to="/SignIn" />
    }else{
        return(
            <>
                <Navbar/>
                <Header/>
                <div className="container">
                    <Content/>
                </div>
                <Footer/>
            </>
        )
    }
   
}

export default Home