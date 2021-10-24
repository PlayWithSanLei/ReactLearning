import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const listItems = numbers.map(number =>
//     <li>{number}</li>
// )

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map(number =>
//         <li key={number.toString()}>{number}</li>
//     );
//     return (
//         <ul>{listItems}</ul>
//     )
// }

// 组件提取后key的使用方式

// function ListItem(props) {
//     // 这里不需要指定key
//     return <li>{props.value}</li>
// }
//
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map(number =>
//         // key应该在数组的上下文中被指定
//         <ListItem key={number.toString()} value={number}/>
//     );
//     return (
//         <ul>
//             {listItems}
//         </ul>
//     )
// }

// 一个好的经验法则是：在 map() 方法中的元素需要设置 key 属性。

const numbers = [1, 2, 3, 4, 5, 6];

/*
* key值在兄弟节点之间必须唯一
* 数组元素中使用的key在其兄弟节点之间应该是独一无二的。然而，他们不需要是全局唯一的
* 当我们生成两个不同的数组时，我们可以使用相同的key值。
* */

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map(post =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );

    const content = props.posts.map(post =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: '你好，世界', content: '欢迎学习React'},
    {
        id: 2, title: '安装方法', content: '你可以通过npm安装react'
    }
];

// key会传递信息给React，但是不会传递给你的组件
// 如果你的组件中需要使用key属性的值，请用其他属性名显式传递这个值
/*
* 比如下面这个例子：
*
*  const content = posts.map((post) =>
* <Post
*   key={post.id}
*   id={post.id}
*   title={post.title} />
* );
*
* 上面例子中，Post组件可以读出props.id，但是不能读出props.key
* */
ReactDOM.render(
    <Blog posts={posts}/>,
    document.getElementById('root')
)
