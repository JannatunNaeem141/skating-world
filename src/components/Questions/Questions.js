import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='questions-container'>
            <div>
                <h2>1. How react works?</h2>
                <p>One of the biggest advantages of using React is infuse HTML code with JavaScript. React works in declarative code.
                    React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.</p>
            </div>
            <div>
                <h2>2. What's the difference between props and state?</h2>
                <ul>
                    <li>Props are read-only but State changes can be asynchronous.</li>
                    <li>Props are immutable and State is mutable.</li>
                    <li>Props can be accessed by the child component but State can't.</li>
                    <li>Props make components reusable but State cannot make components reusable.</li>
                    <li>Stateless component can have Props but Stateless components cannot have State.</li>
                    <li>Props are external and controlled by whatever renders the component but the State is internal and controlled by the React Component itself.</li>
                </ul>
            </div>
            <div>
                <h2>3. How useState works?</h2>
                <p>useState enables to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component.
                    useState is a Hook that allows to have state variables in functional components. While passing the initial state to this function, it returns a variable with the current state value and another function to update this value.</p>
            </div>
        </div>
    );
};

export default Questions;