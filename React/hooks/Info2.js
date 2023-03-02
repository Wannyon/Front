import React, { useState } from 'react';

const Info2 = () => {
    const [form, setForm] = useState({
        name: "",
        nickname: ""
    });

    const { name, nickname } = form;  // 비구조화 할당

    const onChange = e => {
        const nextForm = {
            ...form,    // 기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name]: e.target.value // 원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );


};

export default Info2;