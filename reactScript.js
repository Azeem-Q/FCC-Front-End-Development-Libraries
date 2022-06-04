// Create a Simple JSX Element
/*
const JSX = <h1>Hello JSX!</h1>;

ReactDOM.render(JSX, document.getElementById('root'));
*/
{} /*
   const { number } = require("prop-types");
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
{/*
    class ControlledInput extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               input: ''
           };
           this.handleChange = this.handleChange.bind(this);
       }
       handleChange(event) {
           this.setState(state => ({
               input: event.target.value
           }));
       }
       render() {
           return (
               <div>
                   <input type="text" value={this.state.input} onChange={this.handleChange}/>
                   <h4>Controlled Input:</h4>
                   <p>{this.state.input}</p>
               </div>
           );
       }
    };
    
    ReactDOM.render(<ControlledInput />, document.getElementById('challenge-node'));
    */}

{/*Create a Controlled Form*/}
{/*
    class MyForm extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               input: '',
               submit: ''
           };
           this.handleChange = this.handleChange.bind(this);
           this.handleSubmit = this.handleSubmit.bind(this);
       }
       handleChange(event) {
           this.setState({
               input: event.target.value
           });
       }
       handleSubmit(event) {
           event.preventDefault()
           this.setState(state => ({
               submit: state.input,
               input: ''
           }));
       }
       render() {
           return (
               <div>
                   <form onSubmit={this.handleSubmit}>
                       <input type="text" value={this.state.input} onChange={this.handleChange}/>
                       <button type="submit">Submit!</button>
                   </form>
                   <h1>{this.state.submit}</h1>
               </div>
           );
       }
    };
    
    ReactDOM.render(<MyForm />, document.getElementById('challenge-node'));
    */}

{/*Pass State as Props to Child Components*/}
{/*
    class MyApp extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               name: 'CamperBot'
           }
       }
       render() {
           return (
               <div>
                   <Navbar name={this.state.name}/>
               </div>
           );
       }
    };
    
    
    class Navbar extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div>
                   <h1>Hello, my name is: {this.props.name}</h1>
               </div>
           );
       }
    };
    
    ReactDOM.render(<MyApp />, document.getElementById('challenge-node'));
    */}

{/*Pass a Callback as Props*/}
{/*
    class MyApp extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               inputValue: ''
           }
           this.handleChange = this.handleChange.bind(this);
       }
       handleChange(event) {
           this.setState({
               inputValue: event.target.value
           });
       }
       render() {
           return (
               <div>
                   <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
                   <RenderInput input={this.state.inputValue}/>
               </div>
           );
       }
    };
    
    class GetInput extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div>
                   <h3>Get Input:</h3>
                   <input value={this.props.input} onChange={this.props.handleChange}/>
               </div>
           );
       }
    };
    
    class RenderInput extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div>
                   <h3>Input Render:</h3>
                   <p>{this.props.input}</p>
               </div>
           );
       }
    };
    
    ReactDOM.render(<MyApp />, document.getElementById('challenge-node'));
    */}

{/*Use the Lifecycle Method componentWillMount*/}
{/*
    class MyComponent extends React.Component {
       constructor(props) {
           super(props);
       }
       componentWillMount() {
           console.log('mount');
       }
       render() {
           return <div />
       }
    };
    
    ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
    */}

{/*Use the Lifecycle Method componentDidMount*/}
{/*
    class MyComponent extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               activeUsers: null
           };
       }
       componentDidMount() {
           setTimeout(() => {
               this.setState({
                   activeUsers: 1273
               });
           }, 2500);
       }
       render() {
           return (
               <div>
                   <h1>Active Users: {this.state.activeUsers}</h1>
               </div>
           );
       }
    };
    
    ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
    */}

{/*Add Event Listeners*/}
{/*
    class MyComponent extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               message: ''
           };
           this.handleEnter = this.handleEnter.bind(this);
           this.handleKeyPress = this.handleKeyPress.bind(this);
       }
       componentDidMount() {
           document.addEventListener('keydown', this.handleKeyPress);
       }
    
       componentWillUnmount() {
           document.removeEventListener('keydown', this.handleKeyPress);
       }
    
       handleEnter() {
           this.setState((state) => ({
               message: state.message + 'You pressed the enter key! '
           }));
       }
       handleKeyPress(event) {
           if (event.keyCode === 13) {
               this.handleEnter();
           }
       }
       render() {
           return (
               <div>
                   <h1>{this.state.message}</h1>
               </div>
           );
       }
    };
    
    ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
    */}

{/*Optimize Re-Renders with shouldComponentUpdate*/}
{/*
    class OnlyEvens extends React.Component {
       constructor(props) {
           super(props);
       }
       shouldComponentUpdate(nextProps, nextState) {
           console.log('Should I update?');
           if (nextProps.value % 2 == 0) {
               return true;
           } else {
               return false;
           }
       }
       componentDidUpdate() {
           console.log('Component re-rendered.');
       }
       render() {
           return <h1>{this.props.value}</h1>;
       }
    };
    
    class Controller extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               value: 0
           };
           this.addValue = this.addValue.bind(this);
       }
       addValue() {
           this.setState(state => ({
               value: state.value + 1
           }));
       }
       render() {
           return (
               <div>
                   <button onClick={this.addValue}>Add</button>
                   <OnlyEvens value={this.state.value} />
               </div>
           );
       }
    };
    
    ReactDOM.render(<Controller />, document.getElementById('challenge-node'));
    */}

{/*Introducing Inline Styles*/}
{/*
    class Colorful extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div style={{
                   color: 'red',
                   fontSize: 72
               }}>Big Red</div>
           );
       }
    };
    
    ReactDOM.render(<Colorful />, document.getElementById('challenge-node'));
    */}

{/*Add Inline Styles in React*/}
{/*
    let styles = {
       color: 'purple',
       fontSize: 40,
       border: '2px solid purple'
    };
    
    class Colorful extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <div style={styles}>Style Me!</div>
           );
       }
    };
    
    ReactDOM.render(<Colorful />, document.getElementById('challenge-node'))
    */}

{/*Use Advanced JavaScript in React Render Method*/}
{/*
    const inputStyle = {
       width: 235,
       margin: 5
    };
    
    class MagicEightBall extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               userInput: '',
               randomIndex: ''
           };
           this.ask = this.ask.bind(this);
           this.handleChange = this.handleChange.bind(this);
       }
       ask() {
           if (this.state.userInput) {
               this.setState({
                   randomIndex: Math.floor(Math.random() * 20),
                   userInput: ''
               });
           }
       }
       handleChange(event) {
           this.setState({
               userInput: event.target.value
           });
       }
       render() {
           const possibleAnswers = [
               'It is certain', 
               'It is decidedly so', 
               'Whithout a doubt', 
               'Yes, definitely',
               'You may rely on it',
               'As I see it, yes',
               'Outlook good',
               'Yes',
               'Signs point to yes',
               'Reply hazy try again',
               'Ask again later',
               'Better not tell you now',
               'Cannot predict now',
               'Concentrate and ask again',
               "Don't count on it",
               'My reply is no',
               'My sources say no',
               'Most likely',
               'Outlook not so good',
               'Very doubtful'
           ];
           
           const answer = possibleAnswers[this.state.randomIndex];
           
           return (
               <div>
                   <input type="text" value={this.state.userInput} onChange={this.handleChange} style={inputStyle} />
                   <br />
                   <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
                   <br />
                   <h3>Answer:</h3>
                   <p>{answer}</p>
               </div>
           );
       }
    };
    
    ReactDOM.render(<MagicEightBall />, document.getElementById('challenge-node'));
    */}

{/*Render with an If-Else Condition*/}
{/*
    class MyComponent extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               display: true
           }
           this.toggleDisplay = this.toggleDisplay.bind(this);
       }
       toggleDisplay() {
           this.setState((state) => ({
               display: !state.display
           }));
       }
       render() {
           if (this.state.display == true) {
               return (
                   <div>
                       <button onClick={this.toggleDisplay}>Toggle Display</button>
                       <h1>Displayed!</h1>
                   </div>
                   );
           } else {
               return (
                   <div>
                       <button onClick={this.toggleDisplay}>Toggle Display</button>
                   </div>
               )
           }
       }
    };
    
    ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
    */}

{/*Use && for a More Concise Conditional*/}
{/*
    class MyComponent extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               display: true
           }
           this.toggleDisplay = this.toggleDisplay.bind(this);
       }
       toggleDisplay() {
           this.setState(state => ({
               display: !state.display
           }));
       }
       render() {
           return (
               <div>
                   <button onClick={this.toggleDisplay}>Toggle Display</button>
                   {this.state.display == true && <h1>Displayed!</h1>}
               </div>
           );
       }
    };
    
    ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
    */}

{/*Use a Ternary Expression for Conditional Rendering*/}
{/*
    const inputStyle = {
       width: 235,
       margin: 5
    };
    
    class CheckUserAge extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               input: '',
               userAge: ''
           };
           this.submit = this.submit.bind(this);
           this.handleChange = this.handleChange.bind(this);
       }
       handleChange(e) {
           this.setState({
               input: e.target.value,
               userAge: ''
           });
       }
       submit() {
           this.setState(state => ({
               userAge: state.input
           }));
       }
       render() {
           const buttonOne = <button onClick={this.submit}>Submit</button>;
           const buttonTwo = <button>You May Enter</button>;
           const buttonThree = <button>You Shall Not Pass</button>;
           return (
               <div>
                   <h3>Enter Your Age to Continue</h3>
                   <input type="number" style={inputStyle} value={this.state.input} onChange={this.handleChange} />
                   <br />
                   {this.state.userAge == '' ? buttonOne : this.state.userAge >= 18 ? buttonTwo : buttonThree}
               </div>
           );
       }
    };
    
    ReactDOM.render(<CheckUserAge />, document.getElementById('challenge-node'));
    */}

{/*Render Conditionally from Props*/}
{/*
    class Results extends React.Component {
       constructor(props) {
           super(props);
       }
       render() {
           return (
               <h1>
                   {this.props.fiftyFifty >= .5 ? 'You Win!' : 'You Lose!'}
               </h1>
           )
       }
    }
    
    class GameOfChance extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               counter: 1
           };
           this.handleClick = this.handleClick.bind(this);
       }
       handleClick() {
           this.setState(prevState => {
               return {
                   counter: prevState.counter + 1
               }
           });
       }
       render() {
           const expression = Math.random();
           return (
               <div>
                   <button onClick={this.handleClick}>Play Again</button>
                   <p>{'Turn: ' + this.state.counter}</p>
                   <Results fiftyFifty={expression}/>
               </div>
           );
       }
    };
    
    ReactDOM.render(<GameOfChance />, document.getElementById('challenge-node'));
    */}

{/*Change Inline CSS Conditionally Based on Component State*/}