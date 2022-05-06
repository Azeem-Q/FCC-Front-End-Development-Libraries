// Create a Simple JSX Element

import React from 'react';
import ReactDOM from 'react';

const root = ReactDom.createRoot(document.getElementById('root'));



const element = <h1>Hello JSX!</h1>;

ReactDom.render(element, document.getElementById('root'));