const React = require('react');
const Immutable = require('immutable');

const Clear = () => {
    return (
        <svg className="clear" viewBox="0 0 32 32">
            <path d="M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z"/>
        </svg>
    );
};

const DropdownArrow = () => {
    return (
        <svg className="dropdown-arrow" viewBox="0 0 512 512">
            <path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z"/>
        </svg>
    );
};

const Input = React.createClass({
    propTypes: {
        'clearable': React.PropTypes.bool,
        'disabled': React.PropTypes.bool,
        'matchWhat': React.PropTypes.string, // 'label', 'value', or 'any'
        'matchWhere': React.PropTypes.string, // 'start' or 'any'
        'multi': React.PropTypes.bool, // Whether the input should allow multiple values.
        'options': React.PropTypes.array.isRequired, // Array of possible input values. options[index] = { key: option }
        'onChange': React.PropTypes.func,
        'noResults': React.PropTypes.string,
        'placeholder': React.PropTypes.string
    },

    getDefaultProps() {
        return {
            'clearable': true,
            'disabled': false,
            'matchWhat': 'value',
            'matchWhere': 'any',
            'multi': false,
            'noResults': 'No Results',
            'placeholder': ''
        }
    },

    getInitialState() {
        return {
            selectedOption: Immutable.Map(), // selectedOption[key] option
            multiSelectedOptions: Immutable.List() // multiSelectedOptions[index] = { key: option }
        }
    },

    render() {
        return (
            <div className="react-input">
                <input type="text" onInput={this._handleInputUpdated} onKeyDown={this._handleKeyDown} />
                <Clear />
                <DropdownArrow />
            </div>
        );
    },

    // Triggered when the user presses a key inside the input.
    _handleKeyDown(event) {
        var key = event.keyCode || event.which;
        var keyChar = String.fromCharCode(key);
        if (key === 13) { // also detect tab
            console.log('pressed enter')
        }
    },

    // Triggered when the user changes the text of an input element.
    _handleInputUpdated(event) {
        this._updateOptionsDisplayed();
    },

    // Update which options are autocompleted.
    _updateOptionsDisplayed() {

    }
});

module.exports = Input;
