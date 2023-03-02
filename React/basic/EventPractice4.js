import React, { Component } from 'react';
// import React, { useState } from 'react';    // 함수 형식

class EventPractice4 extends Component {
    constructor(props) {
        super(props);
        this.inputRefs = [
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
        ];
    }

    state = {
        username: '',
        password: '',
        email: '',
        tel: ''
    }

    handleChange = (e) => { // 핵심 코드
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(
            '아이디: ' + this.state.username + "\n" +
            '비밀번호: ' + this.state.password + "\n" +
            '이메일: ' + this.state.email + '\n' +
            '전화번호: ' + this.state.tel
        );

        this.setState({
            username: '',
            password: '',
            email: '',
            tel: ''
        });
    }

    handleSubmit = (e, index) => {
        e.preventDefault();
        if (this.inputRefs[index + 1]) {
            this.inputRefs[index + 1].current.focus();
        }
    };

    render() {
        return (
            <div>
                <center>
                    <h1>회원 가입</h1>
                    <h3>(enter를 입력하면 다음 입력란으로 이동)</h3>
                </center>

                <table border="1" align="center">
                    <tr>
                        <td>아이디</td>
                        <td>
                            <input
                                type="text"
                                name="username"
                                placeholder="아이디"
                                value={this.state.username}
                                onChange={this.handleChange}
                                ref={this.inputRefs[0]}
                                onKeyDown={(e) => e.key === 'Enter' && this.handleSubmit(e, 0)}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>비밀번호</td>
                        <td>
                            <input
                                type="password"
                                name="password"
                                placeholder="비밀번호"
                                value={this.state.password}
                                onChange={this.handleChange}
                                ref={this.inputRefs[1]}
                                onKeyDown={(e) => e.key === 'Enter' && this.handleSubmit(e, 1)}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>이메일</td>
                        <td>
                            <input
                                type="email"
                                name="email"
                                placeholder="이메일"
                                value={this.state.email}
                                onChange={this.handleChange}
                                ref={this.inputRefs[2]}
                                onKeyDown={(e) => e.key === 'Enter' && this.handleSubmit(e, 2)}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>전화번호</td>
                        <td>
                            <input
                                type="tel"
                                name="tel"
                                placeholder="전화번호"
                                value={this.state.tel}
                                onChange={this.handleChange}
                                ref={this.inputRefs[3]}
                                onKeyDown={(e) => e.key === 'Enter' && this.handleSubmit(e, 3)}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2" align="center">
                            <button
                                ref={this.inputRefs[4]}
                                onClick={this.handleClick}

                            >확인</button>
                        </td>
                    </tr>
                </table>
                <hr />
            </div>
        );
    }
}

export default EventPractice4;