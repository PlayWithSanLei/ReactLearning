import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*时钟渲染，通过render*/

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, World!</h1>
//             <h1>It is {new Date().toLocaleTimeString()}.</h1>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     )
// }

// setInterval(tick, 1000)

// 前面都是小大小闹，咱们这次来正经的！
// 封装一个clock组件

// 先封装时针的外观
// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     )
// }
//
// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()}/>,
//         document.getElementById('root')
//     )
// }
//
// setInterval(tick, 1000)

/* 上面忽略了一个技术细节：Clock组件需要一个计时器，并且需要每秒更新UI
*  理想情况下，我们只希望编写一次代码，便可以让Clock组件自我更新
* e.g.
* ReactDOM.render(
*   <Clock />,
*   document.getElementById('root')
* );
*
* 这个时候需要在Clock组件中添加'state'来实现这个功能。
*
* state与props类似，但是state是私有的，并且完全受控与当前组件
* */

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() { /* 这个方法会在组件已经被渲染绕DOM中后执行 */
        this.timerID = setInterval(
            () => this.tick(),1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <FormattedDate date={this.state.date}/>
            </div>
        );
    }
}

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

// 为了证明每个组件是真正独立的，我们可以创建一个渲染三个Clock的App组件

function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
