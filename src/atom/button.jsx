import { Link } from "react-router-dom";
import './style/button-contact.css'

export default function Button(props) {
    return <Link className="btn-contact" to={props.link}>{props.value}</Link>;
}
