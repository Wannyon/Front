import React from 'react';

// 화살표 함수 정의
// const MyComponent = () => {
//     return <div>나의 새롭고 멋진 컴포넌트</div>;
// };


// 선언적 함수 정의
// function MyComponent() {
//     return <div>나의 새롭고 멋진 컴포넌트</div>;
// }


// props
// const MyComponent = props => {
//     return <div>안녕하세요, 제 이름은 {props.name}, {props.name2}입니다.</div>;
// };

// props 비구조화 할당.
const MyComponent = ({ name, name2 }) => {
    return <div>안녕하세요, 제 이름은 {name}, {name2}입니다.</div>;
};
// defaultProps
MyComponent.defaultProps = {
    name: '황재원'
};

export default MyComponent;