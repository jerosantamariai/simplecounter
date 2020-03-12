import React from 'react';
import ReactDOM from 'react-dom';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x

//custom CSS
import "./index.css"

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

function SimpleCounter(props){
    return(
        <div className="container">
            <div className="one">0</div>
            <div className="two">0</div>
            <div className="three">0</div>
            <div className="four">0</div>
        </div>
    )
}

/*class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

increment = () => {
    this.state({count: this.state.count +1})
}

    render (){
        return(
            <div className="container">
                <button classname="minutes">+</button>
                <button classname="seconds">-</button>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}*/
 

ReactDOM.render(<SimpleCounter />, document.querySelector("#root"));