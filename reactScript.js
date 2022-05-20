var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

//import PropTypes from 'prop-types'
var PropTypes = PropTypes.createElement;


var Items = function Items(props) {
    return React.createElement(
        'h1',
        null,
        'Current Quantity of Items in Cart: ',
        props.quantity
    );
};

Items.defaultProps = {
    quantity: 0
};

Items.propTypes = { quantity: PropTypes.number.isRequired };

var ShoppingCart = function (_React$Component) {
    _inherits(ShoppingCart, _React$Component);

    function ShoppingCart(props) {
        _classCallCheck(this, ShoppingCart);

        return _possibleConstructorReturn(this, (ShoppingCart.__proto__ || Object.getPrototypeOf(ShoppingCart)).call(this, props));
    }

    _createClass(ShoppingCart, [{
        key: 'render',
        value: function render() {
            return React.createElement(Items, null);
        }
    }]);

    return ShoppingCart;
}(React.Component);

;

ReactDOM.render(React.createElement(ShoppingCart, null), document.getElementById('challenge-node'));