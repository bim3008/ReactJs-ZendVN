import logo from './logo.svg';
import { useState , useEffect } from 'react';
import { Course } from './componens/Course' ;
import './App.css';
function App() {
    const [count, setCount] = useState(10); // State

    const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
          name: 'Trương Định',
          avatarUrl: 'https://images.unsplash.com/photo-1608844211215-fd6bdb370432?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
    };
   
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    });

    // function handleClick(e) {
    //     console.log(inputText);
    // }

    return (
       
        <div>
            
            <Course info={comment}/>
            <Course info={comment}> TRƯƠNG ĐỊNH </Course>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}> Click me </button>


            {/* <a href="#" onClick={handleClick}> ReactJS Events</a> */}

            
            {/* <input type="text"  refs="textInput" /> */}
            {/* <input type="button" value="Focus the text input" onClick={handleClick}  /> */}
        </div>
    );
}

export default App; 
