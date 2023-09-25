import * as React from 'react';
// import { useState, useEffect } from 'react';
import Content from './Content';
import CategoryList from 'components/CategoryList';
import Footer from 'components/Footer';
import CardSession from './CardSession';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.css';



const Main = () => {
    return ( <>
        <Content/>
        <CategoryList />
        <CardSession />
        <Footer />
        
    </> );
}
 
export default Main;