import React, { Component } from 'react';
// import React, { useState } from 'react';    // 함수 형식

class EventPractice4_1 extends Component {
    // createRef를 사용하여 작성
    input_id = React.createRef();
    input_pw = React.createRef();
    input_jumin1 = React.createRef();
    input_jumin2 = React.createRef();
    input_tel1 = React.createRef();
    input_tel2 = React.createRef();
    input_tel3 = React.createRef();
    input_btn = React.createRef();

    // state 없이 작성
    onChange = (e) => {
        //setTimeout(() => consloe.log(e), 500);
        console.log(e.target.name, ":", e.target.value);
        // console.log(this.state);
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            if (e.target.name === "id") {
                this.input_pw.focus();
            } else if (e.target.current.name === "pw") {
                this.input_jumin1.focus();
            } else if (e.target.current.name === "jumin1") {
                this.input_jumin2.focus();
            } else if (e.target.current.name === "jumin2") {
                this.input_tel1.focus();
            } else if (e.target.current.name === "tel1") {
                this.input_tel2.focus();
            } else if (e.target.current.name === "tel2") {
                this.input_tel3.focus();
            } else if (e.target.current.name === "tel3") {
                this.input_btn.focus();
            }
        }
    };

    onClick = () => {
        alert(
            '아이디: ' + this.input_id.current.value + "\n" +
            '비밀번호: ' + this.input_pw.current.value + "\n" +
            '주민번호: ' + this.input_jumin1.current.value + ' - ' + this.input_jumin2.current.value + '\n' +
            '전화번호: ' + this.input_tel1.current.value + ' - ' + this.input_tel2.current.value + ' - ' + this.input_tel3.current.value
        );

        this.input_id.current.value = '';
        this.input_pw.current.value = '';
        this.input_jumin1.current.value = '';
        this.input_jumin2.current.value = '';
        this.input_tel1.current.value = '';
        this.input_tel2.current.value = '';
        this.input_tel3.current.value = '';
    }

    render() {
        return (
            <div>
                <center>
                    <h1>회원 가입</h1>
                    <h3>(enter를 입력하면 다음 입력란으로 이동)</h3>
                    <h4>createRef를 사용</h4>
                </center>

                <table border="1" align="center">
                    <tr>
                        <td>아이디</td>
                        <td>
                            <input
                                size="10"
                                type="text"
                                name="id"
                                placeholder="아이디"
                                onChange={this.onChange}
                                onKeyPress={this.handleKeyPress}
                                ref={(ref) => {
                                    this.input_id = ref;
                                }}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>비밀번호</td>
                        <td>
                            <input
                                size="10"
                                type="password"
                                name="pw"
                                placeholder="비밀번호"
                                onChange={this.onChange}
                                onKeyPress={this.handleKeyPress}
                                ref={(ref) => {
                                    this.input_pw = ref;
                                }}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>주민번호</td>
                        <td>
                            <input
                                size="7"
                                type="text"
                                name="jumin1"
                                placeholder="앞자리 6자리"
                                onChange={this.onChange}
                                onKeyPress={this.handleKeyPress}
                                ref={(ref) => {
                                    this.input_jumin1 = ref;
                                }}
                            />
                            -
                            <input
                                size="7"
                                type="text"
                                name="jumin2"
                                placeholder="뒷자리 7자리"
                                onChange={this.onChange}
                                onKeyPress={this.handleKeyPress}
                                ref={(ref) => {
                                    this.input_jumin2 = ref;
                                }}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>전화번호</td>
                        <td>
                            <input
                                size="3"
                                type="tel"
                                name="tel1"
                                placeholder="3자리"
                                onChange={this.onChange}
                                onKeyPress={this.handleKeyPress}
                                ref={(ref) => {
                                    this.input_tel1 = ref;
                                }}
                            />

                            <input
                                size="4"
                                type="tel"
                                name="tel2"
                                placeholder="4자리"
                                onChange={this.onChange}
                                onKeyPress={this.handleKeyPress}
                                ref={(ref) => {
                                    this.input_tel2 = ref;
                                }}
                            />

                            <input
                                size="4"
                                type="tel"
                                name="tel3"
                                placeholder="4자리"
                                onChange={this.onChange}
                                onKeyPress={this.handleKeyPress}
                                ref={(ref) => {
                                    this.input_tel3 = ref;
                                }}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2" ALIGN="center">
                            <button
                                onClick={this.onClick}
                                ref={(ref) => {
                                    this.input_btn = ref;
                                }}
                            >
                                확인
                            </button>
                        </td>
                    </tr>
                </table >
                <hr />
            </div >
        );
    }
}

export default EventPractice4_1;