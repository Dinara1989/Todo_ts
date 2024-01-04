import React from 'react';
import Header from "./site/Header";
import Body from "./site/Body";
import Footer from "./site/Footer";
import Component from "./Component";

const students = [
    {id: 1, name:'Dinara', age: 35},
    {id: 2, name:'Hrayr', age: 43},
    {id: 3, name:'Rocky', age: 3}
]
const App = () => {
    // const myFirstSubscriber = () => {
    //     console.log('Hello, Im Dinara')
    // }
    // const mySecondSubscriber = () => {
    //     console.log('Hello, Im Hro')
    // }

    // const foo1=()=> {
    //     console.log(100200)
    // }
    // const foo2=(num:number)=> {
    //     console.log(num)
    // }
    const onClickHandler = (name:string) => {
        console.log(name)
    }
    return (
        <div>
            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={() => foo2(10020)}>2</button>*/}
            <button onClick={(event) => onClickHandler('Dinara')}> My YouTube Chanel 1</button>
            <button onClick={(event) => onClickHandler('Hro')}>My YouTube Chanel 2</button>
            <Header title={'First'}/>
            <Body titleBody={'Here is some content'}/>
            <Component students={students}/> //here I practised map method
            <Footer titleFooter={'Here is some info about our company'}/>
        </div>
    );
};

export default App;