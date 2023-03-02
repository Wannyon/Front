import React, { useRef } from 'react';
// import React, { useState } from 'react';    // 함수 형식

const EventPractice7 = () => {  // 함수 기반은 this. 키워드가 필요없다.
    const input_id = useRef('');
    const input_pw = useRef('');
    const input_jumin1 = useRef('');
    const input_jumin2 = useRef('');
    const input_tel1 = useRef('');
    const input_tel2 = useRef('');
    const input_tel3 = useRef('');
    const input_btn = useRef('');

    // state 없이 작성
    const onChange = (e) => {
        //setTimeout(() => consloe.log(e), 500);
        console.log(e.target.name, ":", e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            if (e.target.name === "id") {
                input_pw.focus();
            } else if (e.target.name === "pw") {
                input_jumin1.current.focus();
            } else if (e.target.name === "jumin1") {
                input_jumin2.current.focus();
            } else if (e.target.name === "jumin2") {
                input_tel1.current.focus();
            } else if (e.target.name === "tel1") {
                input_tel2.current.focus();
            } else if (e.target.name === "tel2") {
                input_tel3.current.focus();
            } else if (e.target.name === "tel3") {
                input_btn.current.focus();
            }
        }
    };

    const onClick = () => {
        alert(
            '아이디: ' + input_id.current.value + "\n" +
            '비밀번호: ' + input_pw.current.value + "\n" +
            '주민번호: ' + input_jumin1.current.value + ' - ' + input_jumin2.current.value + '\n' +
            '전화번호: ' + input_tel1.current.value + ' - ' + input_tel2.current.value + ' - ' + input_tel3.current.value
        );

        input_id.current.value = '';
        input_pw.current.value = '';
        input_jumin1.current.value = '';
        input_jumin2.current.value = '';
        input_tel1.current.value = '';
        input_tel2.current.value = '';
        input_tel3.current.value = '';
    }

    return (
        <div>
            <center>
                <h1>회원 가입</h1>
                <h3>(enter를 입력하면 다음 입력란으로 이동)</h3>
                <h4>useRef를 사용</h4>
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
                            onChange={onChange}
                            onKeyPress={handleKeyPress}
                            ref={input_id}
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
                            onChange={onChange}
                            onKeyPress={handleKeyPress}
                            ref={input_pw}
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
                            onChange={onChange}
                            onKeyPress={handleKeyPress}
                            ref={input_jumin1}
                        />
                        -
                        <input
                            size="7"
                            type="text"
                            name="jumin2"
                            placeholder="뒷자리 7자리"
                            onChange={onChange}
                            onKeyPress={handleKeyPress}
                            ref={input_jumin2}
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
                            onChange={onChange}
                            onKeyPress={handleKeyPress}
                            ref={input_tel1}
                        />
                        -
                        <input
                            size="4"
                            type="tel"
                            name="tel2"
                            placeholder="4자리"
                            onChange={onChange}
                            onKeyPress={handleKeyPress}
                            ref={input_tel2}
                        />
                        -
                        <input
                            size="4"
                            type="tel"
                            name="tel3"
                            placeholder="4자리"
                            onChange={onChange}
                            onKeyPress={handleKeyPress}
                            ref={input_tel3}
                        />
                    </td>
                </tr>

                <tr>
                    <td colSpan="2" ALIGN="center">
                        <button
                            onClick={onClick}
                            ref={input_btn}
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

export default EventPractice7;