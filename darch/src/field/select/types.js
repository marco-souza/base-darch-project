import React from "react";

export let OptionType = React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(
        React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.shape({
                value: React.PropTypes.string,
                label: React.PropTypes.string
            })
        ])
    )
]);
