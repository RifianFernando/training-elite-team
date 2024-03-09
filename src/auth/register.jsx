import React, { useState } from 'react';
import Navbar from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/auth/AuthActiion';

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(register(formData.email, formData.password));
    };
    const auth = useSelector((state) => state.auth);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div>
            <Navbar />
            <h1>Register test</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        value={formData.email}
                        name="email"
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.password}
                        name="password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Register;
