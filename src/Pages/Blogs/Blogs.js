import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div >
            <h1 className='QA'>Question Answer</h1>
            <div className='box-container'>
            <div className="box">
                <h3>Difference between authorization and authentication</h3>
                <p>A React app can use the React Context API to generate global variables that can be passed around. This is an alternative to "prop drilling," which entails passing props from grandparent to child to parent and so on. Context is also marketed as a simpler, lighter way to Redux state management.
                Context API is a (sort of) new feature in React 16.3 that allows you to easily and lightly communicate state across the entire project (or part of it).</p>
            </div>
            <div className="box">
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p></p>
            </div>
            <div className="box">
                <h3> What other services does firebase provide other than authentication?</h3>
                <p>
               
                </p>
            </div>
            </div>
            
        </div>
    );
};

export default Blogs;