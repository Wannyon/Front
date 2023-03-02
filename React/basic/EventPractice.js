// import React, { Component } from 'react';   // 클래스 형식
import React, { useState } from 'react';    // 함수 형식

// class EventPractice extends Component {

// state = {
//     username: '',
//     message: ''
// }

/***************************************************************/
// render() {
//     return (
//         <div>
//             <h1>이벤트 연습</h1>
//             <input
//                 type="text"
//                 name="message"
//                 placeholder="아무거나 입력해 보세요"
//                 value={this.state.message}
//                 onChange={
//                     (e) => {
//                         this.setState({
//                             message: e.target.value
//                         })
//                     }
//                 }
//             />
//             <button onClick={
//                 () => {
//                     alert(this.state.message);
//                     this.setState({
//                         message: ''
//                     });
//                 }
//             }>확인</button>
//             <hr />
//         </div>
//     );
// }
/***************************************************************/
/*
// 함수를 미리 준비하여 전달하는 방법
// constructor(props) { // 화살표 함수를 사용하면 생략 가능
//     super(props);
//     this.handleChange = this.handleChange.bind(this);   //this를 컴포넌트 자신으로 제대로 가리키기 위해서 바인딩 사용
//     this.handleClick = this.handleClick.bind(this);
// }

handleChange = (e) => {
    this.setState({
        message: e.target.value
    });
}
// 선언적 함수 정의
// handleChange(e) {
//     this.setState({
//         message: e.target.value
//     });
// }

handleClick = () => {
    alert(this.state.message);
    this.setState({
        message: ''
    });
}
// 선언적 함수 정의
// handleClick() {
//     alert(this.state.message);
//     this.setState({
//         message: ''
//     });
// }

render() {
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={this.state.message}
                onChange={this.handleChange}
            />
            <button onClick={this.handleClick}>확인</button>
        </div>
    );
}
*/
/*****input이 여러 개일 때 + 이벤트핸들링***********************************************/
/*
handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
}

handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
        username: '',
        message: ''
    });
}

handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        this.handleClick();
    }
}

render() {
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={this.state.username}
                onChange={this.handleChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={this.state.message}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
            />
            <button onClick={this.handleClick}>확인</button>
        </div>
    );
}
*/
// }

/*******함수형 컴포넌트로 구현*****************************************************/
const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const { username, message } = form;

    const onChange = e => { // 중요!!!
        const nextForm = {
            ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name]: e.target.value // 원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: ''
        });
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;