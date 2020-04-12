import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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

function SimpleCounter(props) {
    return (
        <>
        <div className="container">
            <div className="one">{(Math.floor(counter / 1000) % 10)}</div>
            <div className="two">{(Math.floor(counter / 100) % 10)}</div>
            <div className="three">{(Math.floor(counter / 10)) % 10}</div>
            <div className="four">{Math.floor(counter % 10)}</div>
        </div>
        </>
    )
}

SimpleCounter.propTypes = {
    fourthdigit: PropTypes.number,
    thriddigit: PropTypes.number,
    seconddigit: PropTypes.number,
    firstdigit: PropTypes.number
};

let counter = 0;
setInterval(function () {
    counter++;

    ReactDOM.render(<SimpleCounter counter />, document.querySelector("#root"));

}, 1000);

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


