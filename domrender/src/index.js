import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* hello, world */
// const element = <h1>Hello, World! </h1>
//
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000)
