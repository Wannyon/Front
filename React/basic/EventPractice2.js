import React, { Component } from 'react';

class EventPractice2 extends Component {
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
            passward: '',
            email: '',
            tel: ''
        });
    }

    render() {
        return (
            <div>
                <center>
                    <h1>회원 가입</h1>
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
                            />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2" align="center">
                            <button onClick={this.handleClick} >확인</button>
                        </td>
                    </tr>
                </table>
                <hr />
            </div>
        );
    }

}

export default EventPractice2;