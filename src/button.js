import { Component } from "react";
import CucuComponent, {CucuComponent2} from "./cucu";

// class component cara lebih ribet sama tipe yang lama punya
export default class ButtonComponent extends Component {
    // constructor(props) {
    //     // kita bakal ngeset awal sebelum render element
    //     super(props)
    // }

    render() {
        return (
            <div>
                <button>Click Me!!</button>
                {/* <CucuComponent
                    counting={1}
                    data={["test", 2]}
                    hariTrue={"Senin"}
                /> */}
                <CucuComponent2/>
            </div>
        );
    }
}

// functional component
export function ButtonComponent2() {
    return (
        <div>
            <p>test button palsu</p>
        </div>
    );
}
