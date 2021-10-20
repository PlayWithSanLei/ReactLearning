import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* 函数组件与class组件 */

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

/*
* 该函数是一个有效的React组件，因为它接收唯一带有数据的props对象
* 并返回一个React元素
* 这类组件被称为函数组件，本质上就是JavaScript函数
* */

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

/* 这个class等同于上面的函数组件 */

// const element = <Welcome name={'Sara'}/>

/* 这里的name就会作为props对象的属性传回定义的组件中 */


/* 创建一个可以多次渲染Welcome组件的App组件 */

// function App() {
//     return (
//         <div>
//             <Welcome name="sara"></Welcome>
//             <Welcome name="zhanghao"></Welcome>
//             <Welcome name="sanlei"></Welcome>
//             <Welcome name="Yujing"></Welcome>
//         </div>
//     );
// }

/* 提取组件
* 将组件拆分为更小的组件
*/

function formatDate(date) {
    return date.toLocaleString();
}

// 比如这个，一层套一层，很难维护，并且很难复用各个部分
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

//  让我们从这💩山代码中提取一些组件出来

// 首先提取Avatar组件

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    )
}

// 接下来提取UserInfo组件，该组件在用户名旁边渲染Avatar组件

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}


const comment = {
    date: new Date(),
    text: 'I Love Code and you. And I love coding with you!',
    author: {
        name: 'Hello, Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

ReactDOM.render(
    // element,
    // <App/>,
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}/>,
    document.getElementById('root')
);
