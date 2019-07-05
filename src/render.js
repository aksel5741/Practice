import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';


export const rerenderEntireTree = (state) => {
    ReactDOM.render(
       <Page />
        , document.getElementById('root'));
}



