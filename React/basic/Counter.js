import React, { Component } from 'react';

class Counter extends Component {
    // constructor(props) {    // 생성자 메서드
    //     super(props);
    //     // state의 초깃값 설정하기
    //     this.state = {
    //         number: 0
    //         fixedNumber: 0
    //     };
    // }

    // 생성자를 쓰지 않고 작성.
    state = {
        number: 0,
        fixedNumber: 0
    };

    render() {
        const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
                    // onClick={() => {
                    //     // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
                    //     // this.setState를 사용한다고 해서 state 값이 바로 바뀌지는 않기 때문
                    //     this.setState({ number: number + 1 });
                    //     this.setState({ number: this.state.number + 1 });
                    // }}

                    //onClick={() => {
                    //     this.setState(prevState => {
                    //         return {
                    //             number: prevState.number + 1
                    //         };
                    //     });
                    //     // 위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
                    //     // 아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
                    //     this.setState(prevState => ({
                    //         number: prevState.number + 1
                    //     }));
                    // }}

                    // setState를 사용하여 값을 업데이트하고 난 다음에 특정 작업을 하고 싶을 때는 setState의 두 번째 파라미터로 콜백(callback) 함수를 등록하여 작업을 처리
                    onClick={() => {
                        this.setState(
                            {
                                number: number + 1
                            },
                            () => {
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                            }
                        );
                    }}
                >
                    +1
                </button>
                <hr />
            </div>
        );
    }
}

export default Counter;