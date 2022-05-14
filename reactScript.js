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

var Citrus = function Citrus() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            null,
            'Citrus:'
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                'Lemon'
            ),
            React.createElement(
                'li',
                null,
                'Lime'
            ),
            React.createElement(
                'li',
                null,
                'Orange'
            ),
            React.createElement(
                'li',
                null,
                'Grapefruit'
            )
        )
    );
};

var NonCitrus = function NonCitrus() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            null,
            'Non-Citrus:'
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                'Apples'
            ),
            React.createElement(
                'li',
                null,
                'Blueberries'
            ),
            React.createElement(
                'li',
                null,
                'Strawberries'
            ),
            React.createElement(
                'li',
                null,
                'Bananas'
            )
        )
    );
};

var Fruits = function (_React$Component) {
    _inherits(Fruits, _React$Component);

    function Fruits(props) {
        _classCallCheck(this, Fruits);

        return _possibleConstructorReturn(this, (Fruits.__proto__ || Object.getPrototypeOf(Fruits)).call(this, props));
    }

    _createClass(Fruits, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    'Fruits:'
                ),
                React.createElement(Citrus, null),
                React.createElement(NonCitrus, null)
            );
        }
    }]);

    return Fruits;
}(React.Component);

;

var Vegetables = function Vegetables() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            'Vegetables:'
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                'Brussel Sprouts'
            ),
            React.createElement(
                'li',
                null,
                'Broccoli'
            ),
            React.createElement(
                'li',
                null,
                'Squash'
            )
        )
    );
};

var TypesOfFood = function (_React$Component2) {
    _inherits(TypesOfFood, _React$Component2);

    function TypesOfFood(props) {
        _classCallCheck(this, TypesOfFood);

        return _possibleConstructorReturn(this, (TypesOfFood.__proto__ || Object.getPrototypeOf(TypesOfFood)).call(this, props));
    }

    _createClass(TypesOfFood, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Types of Food:'
                ),
                React.createElement(Fruits, null),
                React.createElement(Vegetables, null)
            );
        }
    }]);

    return TypesOfFood;
}(React.Component);

;

ReactDOM.render(React.createElement(TypesOfFood, null), document.getElementById('root'));