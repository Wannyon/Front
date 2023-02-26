import './App.css';
import './register.css';
import React from 'react';  // function 기반
// import React, { Component } from 'react'; // 클래스 기반
import MyComponent from './MyComponent';

function App() {
  // const name = "react";
  // return (
  //   <div>
  //     {name === 'react' ? (
  //       <h1>리액트입니다.</h1>
  //     ) : (
  //       <h2>리액트가 아닙니다.</h2>
  //     )}
  //   </div>
  // );


  // const name = '리액트';
  // // return <div>{name === '뤼엑트' ? <h1>리액트가 아닙니다.</h1> : <h2>리액트입니다.</h2>}</div>
  // return <div>{name ==='리액트' && <h1>리액트입니다.</h1>}</div>


  // const number = false;
  // return (number && <div>number가 거짓이므로 이문장은 실행되지 않음</div>);


  // const name = undefined;
  // return name || '값이 undefined입니다.';

  // const hobby = undefined;
  // return <div>{hobby}</div>;


  // const name = '리액트';
  // const style = {
  //   // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: '48px', // font-size -> fontSize
  //   fontWeight: 'bold', // font-weight -> fontWeight
  //   padding: 16 // 단위를 생략하면 px로 지정됩니다.
  // };
  // return <div style={style}>{name} </div>;


  // const name = 'React';
  // return <div className="react">{name}</div>;

  /********실습****************************************************/

  // return (
  //   <form>
  //     <fieldset>
  //       <legend>회원 기본 정보</legend>
  //       <ol>
  //         <li>
  //           <label className="userid">아이디</label>
  //           <input type="text" id="userid" name="userid" required autofocus
  //             placeholder="영문,숫자 사용. 10자미만" />
  //         </li>
  //         <li>
  //           <label for="pwd1">비밀번호</label>
  //           <input type="password" id="pwd1" name="pwd1" required
  //             placeholder="영문,숫자 사용. 6~10자리" />
  //         </li>
  //         <li>
  //           <label for="pwd2">비밀번호 확인</label>
  //           <input type="password" id="pwd2" name="pwd2" required />
  //         </li>

  //         <li>
  //           <label for="fullname">이름</label>
  //           <input type="text" id="fullname" name="fullname" required />
  //         </li>
  //         <li>		<label for="age">나이</label>
  //           <input id="age" name="age" type="number" min="1" max="65" step="1" />
  //         </li>
  //         <li>
  //           <label for="birth">생일</label>
  //           <input id="birth" name="birth" type="date" />
  //         </li>
  //         <li>
  //           <label for="email">이메일 주소</label>
  //           <input id="email" name="email" type="email"
  //             placeholder="zoca01@icore.com" required />
  //         </li>
  //         <li>
  //           <label for="tel">핸드폰</label>
  //           <input id="tel" name="tel" type="tel" />
  //         </li>
  //       </ol>
  //     </fieldset>

  //     <fieldset>
  //       <legend>회원 추가 정보</legend>
  //       <ol>
  //         <li>
  //           <label for="job">직업</label>
  //           <input list="job" name="job" />
  //           <datalist id="job">
  //             <option value="회사원" />
  //             <option value="교사" />
  //             <option value="프로그래머" />
  //             <option value="자영업" />
  //             <option value="기타" />
  //           </datalist>
  //         </li>
  //         <li>
  //           <label for="office">오피스 활용</label>
  //           <input id="office" name="com" type="range" min="1" max="5" step="1" />
  //         </li>
  //       </ol>
  //     </fieldset>
  //     <fieldset>
  //       <button type="submit"> 입력 </button>
  //     </fieldset>
  //   </form>
  // );


  // MyComponent 렌더링
  // return <MyComponent />;


  //props
  // const App = () => {
  //   return <MyComponent name="React" />;
  // };

  return <MyComponent /*name="React"*/ name2="리액트"></MyComponent>;

}


/****클래스 형식******************************************************/
// class App extends Component {
//   render() {
//     const name = 'react';
//     return <div className="react">{name}</div>;
//   }
// }



export default App;
