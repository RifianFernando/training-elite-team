import '../style/navbar.css';
import { Link } from 'react-router-dom';
import { NavbarData } from '../constant/navbarProps';
import '../style/navbar.css';
import logo from '../img/atom/logo-company.jpg';
import Button from '../atom/button';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/auth/AuthActiion';

export default function Navbar() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    console.log(auth);
    const logout = () => {
        dispatch(logoutUser());
    };

    return (
        <nav className="nav-main">
            <img src={logo} alt="" />
            <div className="nav-left2">
                <div className="nav-left">
                    {NavbarData.map((data) => {
                        return (
                            <Link className="nav-link" to={data.link}>
                                {data.value}
                            </Link>
                        );
                    })}
                </div>
                {auth.isAuthenticated ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <Button link={'/login'} value="Login" />
                )}
            </div>
        </nav>
    );
}
