import React from 'react';

export default class App extends React.Component {
    render() { return (
        <div>
            <h1>App Component!</h1>
            {this.props.children}
        </div>
    ); }
}