import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };

        // 为了在回调中使用this，这个绑定是必不可少的。
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

// 推荐语法 class fields 处理JSX中的this
// class LoggingButton extends React.Component {
//     // 此语法确保 handleClick内的this已被绑定
//     // 注意：这是实验性语法
//     handleClick = () => {
//         console.log('this is:', this);
//     }
//
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 Click me
//             </button>
//         )
//     }
// }

// 不推荐语法 在回调中使用箭头函数
// 这个语法问题在于每次渲染LoggingButton时都会创建不同的回调函数。
// 我们通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题。
class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is a', this)
    }

    render() {
        return (
            <button onClick={() => this.handleClick()}>
                Click me
            </button>
        )
    }
}

ReactDOM.render(
    <LoggingButton/>,
    document.getElementById('root')
);
