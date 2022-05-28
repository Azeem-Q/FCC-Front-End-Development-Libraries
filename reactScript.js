// Create a Simple JSX Element
/*
const JSX = <h1>Hello JSX!</h1>;

ReactDOM.render(JSX, document.getElementById('root'));
*/

// Create a Complex JSX Element
/*
const JSX = 
    <div>
        <h1>React</h1>
        <p>Create a complex JSX element</p>
        <ul>
            <li>Coding is fun</li>
            <li>Its so awesome to finally come over a problem after a long struggle</li>
            <li>Just some list item</li>
        </ul>
    </div>;

ReactDOM.render(JSX, document.getElementById('root'));
*/

// Add Comments in JSX
{/*
    const JSX = (
       <div>
           */}{/*Sample React Code*/}
{/*<h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    </div>
    );
    ReactDOM.render(JSX, document.getElementById('root'));
    */}

{/* Render HTML Elements to the DOM */}
{/*
    const JSX = (
       <div>
           <h1>Hello World</h1>
           <p>Lets render this to the DOM</p>
       </div>
    );
    
    ReactDOM.render(JSX, document.getElementById('challenge-node'));
    */}

{/* Define an HTML Class in JSX */}
{/*
    const JSX = (
       <div className="myDiv">
           <h1>Add a class to this div</h1>
       </div>
    );
    
    ReactDOM.render(JSX, document.getElementById('challenge-node'));
    */}

{/* Learn About Self-Closing JSX Tags */}
{/*
    const JSX = (
       <div>
         <h2>Welcome to React!</h2> <br />
         <p>Be sure to close all tags!</p>
         <hr />
       </div>
     );
    
    ReactDOM.render(JSX, document.getElementById('challenge-node'));
    */}

{/*Create a Stateless Functional Component*/}
{/*
    const MyComponent = function() {
       return (
           <div>
               <p>This is a string</p>
           </div>
       )
    }
    
    ReactDOM.render(<MyComponent />, document.getElementById('root'));
    */}

{/*Create a React Component*/}
{/*
    class MyComponent extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div>
                   <h1>Hello React!</h1>
               </div>
           );
       }
    };
    
    ReactDOM.render(<MyComponent />, document.getElementById('root'));
    */}

{/*Create a Component with Composition*/}
{/*
    const ChildComponent = () => {
       return (
           <div>
               <p>I am the child</p>
           </div>
       );
    };
    
    class ParentComponent extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div>
                   <h1>I am the parent</h1>
                   <ChildComponent />
               </div>
           );
       }
    };
    
    ReactDOM.render(<ParentComponent />, document.getElementById('root'));
    */}

{/*Use React to Render Nested Components*/}
{/*
    const TypesOfFruit = () => {
       return (
           <div>
               <h2>Fruits:</h2>
               <ul>
                   <li>Apples</li>
                   <li>Blueberries</li>
                   <li>Strawberries</li>
                   <li>Bananas</li>
               </ul>
           </div>
       );
    };
    
    const Fruits = () => {
       return (
           <div>
               <TypesOfFruit />
           </div>
       );
    };
    
    class TypesOfFood extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div>
                   <h1>Types of Food</h1>
                   <Fruits />
               </div>
           );
       }
    };
    
    ReactDOM.render(<TypesOfFood />, document.getElementById('root'));
    */}

{/*Compose React Components*/}
{/*
    const Citrus = () => {
       return (
           <div>
               <h3>Citrus:</h3>
               <ul>
                   <li>Lemon</li>
                   <li>Lime</li>
                   <li>Orange</li>
                   <li>Grapefruit</li>
               </ul>
           </div>
       );
    };
    
    const NonCitrus = () => {
       return (
           <div>
               <h3>Non-Citrus:</h3>
               <ul>
                   <li>Apples</li>
                   <li>Blueberries</li>
                   <li>Strawberries</li>
                   <li>Bananas</li>
               </ul>
           </div>
       );
    };
    
    class Fruits extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div>
                   <h2>Fruits:</h2>
                   <Citrus />
                   <NonCitrus />
               </div>
           );
       }
    };
    
    const Vegetables = () => {
       return (
           <div>
               <h2>Vegetables:</h2>
               <ul>
                   <li>Brussel Sprouts</li>
                   <li>Broccoli</li>
                   <li>Squash</li>
               </ul>
           </div>
       );
    };
    
    class TypesOfFood extends React.Component {
       constructor(props) {
           super(props);
       }
       render () {
           return (
               <div>
                   <h1>Types of Food:</h1>
                   <Fruits />
                   <Vegetables />
               </div>
           );
       }
    };
    
    ReactDOM.render(<TypesOfFood />, document.getElementById('root'));
    */}

{/*Render a Class Component to the DOM*/}
{/*
    const Citrus = () => {
       return (
           <div>
               <h3>Citrus:</h3>
               <ul>
                   <li>Lemon</li>
                   <li>Lime</li>
                   <li>Orange</li>
                   <li>Grapefruit</li>
               </ul>
           </div>
       );
    };
    
    const NonCitrus = () => {
       return (
           <div>
               <h3>Non-Citrus:</h3>
               <ul>
                   <li>Apples</li>
                   <li>Blueberries</li>
                   <li>Strawberries</li>
                   <li>Bananas</li>
               </ul>
           </div>
       );
    };
    
    class Fruits extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div>
                   <h2>Fruits:</h2>
                   <Citrus />
                   <NonCitrus />
               </div>
           );
       }
    };
    
    const Vegetables = () => {
       return (
           <div>
               <h2>Vegetables:</h2>
               <ul>
                   <li>Brussel Sprouts</li>
                   <li>Broccoli</li>
                   <li>Squash</li>
               </ul>
           </div>
       );
    };
    class TypesOfFood extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div>
                   <h1>Types of Food:</h1>
                   <Fruits />
                   <Vegetables />
               </div>
           );
       }
    };
    
    ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))
    */}

{/*Write a React Component from Scratch*/}
{/*
    class MyComponent extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div>
                   <h1>My First React Component!</h1>
               </div>
           );
       }
    };
    
    ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
    */}

{/*Pass Props to a Stateless Functional Component*/}
{/*
    const CurrentDate = (props) => {
       return (
           <div>
               <p>The current date is: {props.date}</p>
           </div>
       );
    };
    
    class Calender extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div>
                   <h3>What date is it?</h3>
                   <CurrentDate date={Date()}/>
               </div>
           );
       }
    };
    
    ReactDOM.render(<Calender />, document.getElementById('challenge-node'));
    */}

{/*Pass an Array as Props*/}
{/*
    const List = (props) => {
       return <p>{props.tasks.join(', ')}</p>
    };
    
    class ToDo extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div>
                   <h1>To Do Lists</h1>
                   <h2>Today</h2>
                   <List tasks={['Go to gym', 'Grocery shopping', 'Pay bills']}/>
                   <h2>Tomorrow</h2>
                   <List tasks={['Doctor\'s appointment', 'Go to gym', 'Go to bank']}/>
               </div>
           );
       }
    };
    
    ReactDOM.render(<ToDo />, document.getElementById('challenge-node'));
    */}

{/*Use Default Props*/}
{/*
    const ShoppingCart = (props) => {
       return (
           <div>
               <h1>Shopping Cart Component {props.items}</h1>
           </div>
       )
    };
    
    ShoppingCart.defaultProps = {
       items: 0
    }
    
    ReactDOM.render(<ShoppingCart />, document.getElementById('challenge-node'));
    */}

{/*Override Default Props*/}
{/*
    const Items = (props) => {
       return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
    }
    
    Items.defaultProps = {
       quantity: 0
    }
    
    class ShoppingCart extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return <Items quantity={10}/>
       }
    };
    
    ReactDOM.render(<ShoppingCart />, document.getElementById('challenge-node'));
    */}

{} /*Use PropTypes to Define the Props You Expect*/

//import React from 'react';
//import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
{/*
    const Items = (props) => {
       return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
    };
    
    Items.propTypes = {quantity: PropTypes.number.isRequired}
    
    Items.defaultProps = {
       quantity: 0
    };
    
    class ShoppingCart extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return <Items />
       }
    };
    
    ReactDOM.render(<ShoppingCart />, document.getElementById('challenge-node'));
    */}

{/*Access Props Using this.props*/}
{/*
    class App extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div>
                   <Welcome name="Azeem"/>
               </div>
           );
       }
    };
    
    class Welcome extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div>
                   <p>Hello, <strong>{this.props.name}</strong>!</p>
               </div>
           );
       }
    };
    
    ReactDOM.render(<App />, document.getElementById('challenge-node'));
    */}

{/*Review Using Props with Stateless Functional Components*/}
{/*
    class CampSite extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div>
                   <Camper />
               </div>
           );
       }
    };
    
    const Camper = (props) => {
       return (
           <div>
               <h1>Camper Info</h1>
               <p>{props.name}</p>
           </div>
       )
    }
    
    Camper.defaultProps = {
       name: 'CamperBot'
    }
    
    Camper.propTypes = {
       name: PropTypes.string.isRequired
    }
    
    ReactDOM.render(<CampSite />, document.getElementById('challenge-node'));
    */}

{/*Create a Stateful Component*/}
{/*
    class StatefulComponent extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               name: 'Azeem'
           }
       }
       render() {
           return (
               <div>
                   <h1>{this.state.name}</h1>
               </div>
           );
       }
    };
    
    ReactDOM.render(<StatefulComponent />, document.getElementById('challenge-node'));
    */}

{/*Render State in the User Interface*/}
{/*
    class MyComponent extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               name: 'freeCodeCamp'
           }
       }
       render() {
           return (
               <div>
                   <h1>{this.state.name}</h1>
               </div>
           );
       }
    };
    
    ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
    */}

{/*Render State in the User Interface Another Way*/}
{/*
    class MyComponent extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               name: 'freeCodeCamp'
           }
       }
       render() {
           const name = this.state.name;
           return (
               <div>
                   <h1>{name}</h1>
               </div>
           );
       }
    };
    
    ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
    */}

{/*Set State with this.setState*/}
{/*
    class MyComponent extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               name: 'Initial State'
           };
           this.handleClick = this.handleClick.bind(this);
       }
       handleClick() {
           this.setState({
               name: 'React Rocks!'
           })
       }
       render() {
           return (
               <div>
                   <button onClick={this.handleClick}>Click Me</button>
                   <h1>{this.state.name}</h1>
               </div>
           );
       }
    };
    
    ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
    */}

{/*Bind 'this' to a Class Method*/}
{/*
    class MyComponent extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               text: 'Hello'
           };
           this.handleClick = this.handleClick.bind(this);
       }
       handleClick() {
           this.setState({
               text: 'You clicked!'
           });
       }
       render() {
           return (
               <div>
                   <button onClick={this.handleClick}>Click Me</button>
                   <h1>{this.state.text}</h1>
               </div>
           );
       }
    };
    
    ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
    */}

{/*Use State to Toggle an Element*/}
{/*
    class MyComponent extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               visibility: false
           };
           this.toggleVisibility = this.toggleVisibility.bind(this);
       }
       toggleVisibility() {
           this.setState(state => ({
               visibility: !state.visibility
           }));
       }
       render() {
           if(this.state.visibility) {
               return (
                   <div>
                       <button onClick={this.toggleVisibility}>Click Me</button>
                       <h1>Now you see me!</h1>
                   </div>
               );
           } else {
               return (
                   <div>
                       <button onClick={this.toggleVisibility}>Click Me</button>
                   </div>
               );
           }
       }
    }
    
    ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
    */}

{/*Write a Simple Counter*/}
{/*
    class Counter extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               count: 0
           };
           this.increment = this.increment.bind(this);
           this.decrement = this.decrement.bind(this);
           this.reset = this.reset.bind(this);
       }
       increment() {
           this.setState(state => ({
               count: state.count + 1
           }));
       }
       decrement() {
           this.setState(state => ({
               count: state.count - 1
           }));
       }
       reset() {
           this.setState({
               count: 0
           });
       }
       render() {
           return (
               <div>
                   <button className="inc" onClick={this.increment}>Increment!</button>
                   <button className="dec" onClick={this.decrement}>Decrement!</button>
                   <button className="reset" onClick={this.reset}>Reset</button>
                   <h1>Current Count: {this.state.count}</h1>
               </div>
           );
       }
    };
    
    ReactDOM.render(<Counter />, document.getElementById('challenge-node'));
    */}

{/*Create a Controlled Input*/}