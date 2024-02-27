import React from 'react';
import Navbar from '../components/navbar';
import ContactSection from '../components/contactSection';

function ContactUs() {
    return (
        <div>
            <Navbar />
            <div className='container-contact-us'>
                <ContactSection/>
            </div>
        </div>
    );
}

export default ContactUs;
