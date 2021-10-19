import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
}
// const user = false

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>
    }
    return <h1>Hello, Stranger!</h1>
}

const element = (
    getGreeting(user)
)

ReactDOM.render(
    element,
    document.getElementById('root')
)
