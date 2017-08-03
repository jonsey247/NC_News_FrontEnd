import React from 'react';
import PropTypes from 'prop-types';

class VoteButton extends React.Component {
    render() {
        return (
            <div className="vote">
                <span className="voteCount">
                    {this.props.voteCount}
                    <div className="voteButton">
                        <button>+</button>
                        <button>-</button>
                    </div>
                </span>
            </div>
        );
    }
}

export default VoteButton;

VoteButton.proptypes = {
    votes: PropTypes.number.isRequired
}; 