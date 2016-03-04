const React = require('react');
const ReactDOM = require('react-dom');
const Input = require('../../src/input.jsx');

const Example = React.createClass({
    render() {
        return (
            <Input options={[]} />
        )
    }
});

ReactDOM.render(
    <Example />,
    document.getElementById('react-hook')
);
