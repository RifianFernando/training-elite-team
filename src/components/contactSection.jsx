import { FormLabel } from '@mui/material';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { FormApi } from '../api/formApi';

function ContactSection() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        const form1 = new FormData();
        form1.append('name', form.name);
        form1.append('email', form.email);
        form1.append('message', form.message);
        await FormApi.postContactForm(form1);
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div>
            <form
                action=""
                onSubmit={onSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10rem',
                }}
            >
                <FormLabel className="form-label">Name</FormLabel>
                <input
                    placeholder="write name"
                    name="name"
                    onChange={handleChange}
                    value={form.name}
                />
                <FormLabel className="form-label">Email</FormLabel>
                <input
                    placeholder="write your email here"
                    onChange={handleChange}
                    name="email"
                    value={form.email}
                />
                <FormLabel className="form-label">Message</FormLabel>
                <textarea
                    placeholder="write your email here"
                    onChange={handleChange}
                    name="message"
                    value={form.message}
                />
                <Button
                    type="submit"
                    style={{
                        backgroundColor: '#289F97',
                        color: 'white',
                    }}
                >
                    submit
                </Button>
            </form>
        </div>
    );
}

export default ContactSection;
