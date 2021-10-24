import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// form标签
// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''}
//
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value})
//         console.log(this.state.value)
//     }
//
//     handleSubmit(event) {
//         alert('提交的名字: ' + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     名字：
//                     <input type="text" value={this.state.value} onChange={this.handleChange}/>
//                 </label>
//                 <input type="submit" value="提交"/>
//             </form>
//         )
//     }
// }


//textarea标签
// class EssayForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: '请撰写一篇关于你喜欢的人的文'
//         };
//
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({
//             value: event.target.value
//         })
//     }
//
//     handleSubmit(event) {
//         alert('提交的文章:' + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label value={this.state.value} onChange={this.handleChange}>
//                     文章：
//                     <textarea value={this.state.value} onChange={this.handleChange}/>
//                 </label>
//                 <input type="submit" value="提交"/>
//             </form>
//         )
//     }
// }

// select标签
// class FlavorForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: 'coconut'
//         }
//
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//     }
//
//     handleChange(event) {
//         this.setState({
//             value: event.target.value
//         })
//     }
//
//     handleSubmit(event) {
//         alert('你喜欢的风味是：' + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     选择你喜欢的风味：
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="grapefruit">葡萄</option>
//                         <option value="lime">酸橙</option>
//                         <option value="coconut">椰子</option>
//                         <option value="mango">芒果</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="提交"/>
//             </form>
//         )
//     }
// }

// class Reservation extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isGoing: true,
//             numberOfGuests: 2
//         };
//         this.handleInputChange = this.handleInputChange.bind(this)
//     }
//
//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name
//
//         this.setState({
//             [name]: value
//         });
//     }
//
//     render() {
//         return (
//             <form>
//                 <label>
//                     参与:
//                     <input
//                         name="isGoing"
//                         type="checkbox"
//                         checked={this.state.isGoing}
//                         onChange={this.handleInputChange}
//                     />
//                 </label>
//                 <br/>
//                 <label>
//                     来宾人数:
//                     <input
//                         name="numberOfGuests"
//                         type="number"
//                         value={this.state.numberOfGuests}
//                         onChange={this.handleInputChange}
//                     />
//                 </label>
//             </form>
//         )
//     }
// }

ReactDOM.render(
    <input value="hi"/>,
    document.getElementById('root')
);

setTimeout(function () {
    ReactDOM.render(<input value={null}/>, document.getElementById('root'))
}, 5000)
