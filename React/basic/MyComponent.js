import React from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 화살표 함수 정의
// const MyComponent = () => {
//     return <div>나의 새롭고 멋진 컴포넌트</div>;
// };


// 선언적 함수 정의
// function MyComponent() {
//     return <div>나의 새롭고 멋진 컴포넌트</div>;
// }


/***  함수형 Props*****************************************************/
/*
// const MyComponent = props => {
//     return <div>안녕하세요, 제 이름은 {props.name}, {props.name2}입니다.</div>;
// };

// props 비구조화 할당.
const MyComponent = ({ name, name2, favoriteNumber, children }) => {
    // const { name, name2, children } = props; // 비구조화 할당 문법으로 추출.
    return (<div>
        안녕하세요, 제 이름은 {name}, {name2}입니다. <br />
        children 값은 {children}입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
    );

};

// defaultProps
MyComponent.defaultProps = {
    name: '황재원'
};

// props의 타입 지정
MyComponent.propTypes = {
    name: PropTypes.string,
    name2: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};
*/
/************************************************************************/

/***  클래스형 Props*****************************************************/
// class MyComponent extends Component {
//     render() {
//         const { name, favoriteNumber, children } = this.props; // 비구조화 할당
//         return (
//             <div>
//                 안녕하세요, 제 이름은 {name}입니다. <br />
//                 children 값은 {children}입니다. <br />
//                 제가 좋아하는 숫자는 {favoriteNumber}입니다.
//             </div>
//         );
//     }
// }
// MyComponent.defaultProps = {
//     name: '기본 이름'
// };

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
// };

// 하나의 클래스로 표현
// class MyComponent extends Component {
//     static defaultProps = {
//         name: '기본 이름'
//     };
//     static propTypes = {
//         name: PropTypes.string,
//         favoriteNumber: PropTypes.number.isRequired
//     };
//     render() {
//         const { name, favoriteNumber, children } = this.props; // 비구조화 할당
//         return (
//             <div>
//                 안녕하세요, 제 이름은 {name}입니다. <br />
//                 children 값은 {children}입니다. <br />
//                 제가 좋아하는 숫자는 {favoriteNumber}입니다.
//             </div>
//         );
//     }
// }
/************************************************************************/

// 객체 다루기
const MyComponent = props => {
    const array = [
        { id: 1, value: true },
        { id: 2, value: true },
        { id: 3, value: false }
    ];
    let nextArray = array.concat({ id: 4 }); // 새 항목 추가
    nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거
    nextArray.map(item => (item.id === 1 ? { ...item, value: false } : item)); // id가 1인 항목의 value를 false로 설정


    return <div>안녕하세요, 제 이름은 {props.name}, {props.name2}입니다.</div>;
};
const object = { a: 1, b: 2, c: 3 };
const nextObject = { ...object, b: 2 }; // 사본을 만들어서 b 값만 덮어 쓰기

// 배열 다루기
const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: false }
];
let nextArray = array.concat({ id: 4 }); // 새 항목 추가
nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거
nextArray.map(item => (item.id === 1 ? { ...item, value: false } : item)); // id가 1인 항목의 value를 false로 설정

export default MyComponent;