import * as React from "react";
import "./Content.css";
import "containers/pages/Content.css";
import "font-awesome/css/font-awesome.css";
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from 'components/Footer';
import Contactsection from 'components/Contactsection';


function AboutUs() {
    return (
        <> 
        <Contactsection/>
        <Footer/>
      </>
    );
  }
  
  export default AboutUs;