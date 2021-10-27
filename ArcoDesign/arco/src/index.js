import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css'

function App() {
    return (
        <Button type='primary'>
            Hello, World!
        </Button>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
