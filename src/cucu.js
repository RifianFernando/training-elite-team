import { Component, useState } from "react";

// class component cara lebih ribet sama tipe yang lama punya

console.log("inisialisasi awal");

// class component
export default class CucuComponent extends Component {
    constructor(props) {
            // kita bakal ngeset awal sebelum render element
        super(props);

        // cara define state awal
        this.state = {
            hari: "Kamis",
            count: this.props.counting,
        };
    }

    updateState = (day) => {
        this.setState({
            hari: day,
        });
    };

    countPlus = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    // static getDerivedStateFromProps(nextProps, prevState) {
    // }

    render() {
        console.log("ke render");
        return (
            // <p>
            //     cucu {this.props.counting} + {this.props.data}
            // </p>

            // cara akses state
            // <p>Hari yang benar adalah {this.state.hari}</p>
            <div>
                <button
                    onClick={(e) => {
                        this.updateState(this.props.hariTrue);
                        this.countPlus();
                    }}
                >
                    Update Days
                </button>
                <p>{this.state.hari}</p>
                <p>{this.state.count}</p>
            </div>
        );
    }
}

// functional component
export function CucuComponent2() {
    const [test, setTest] = useState("string");
    return (
        <div>
            <p>test button palsu {test}</p>
        </div>
    );
}
