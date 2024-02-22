import '../style/navbar.css';
import { Link } from 'react-router-dom';
import { NavbarData } from '../constant/navbarProps';
import '../style/navbar.css';
import logo from '../img/atom/logo-company.jpg';
import Button from '../atom/button';

export default function Navbar() {
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
                <Button link={'/contact-us'} value="Contact" />
            </div>
        </nav>
    );
}
