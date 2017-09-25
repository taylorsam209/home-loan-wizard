import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateFound } from '../../ducks/reducer';
import { connect } from 'react-redux';

class WizardFour extends Component {
    render() {
        const { updateFound } = this.props;

        return (
            <div className="parent-div">
                <div className="vert-align">
                    <p>Have you already found your new home?</p> <br />

                    <div className="row">
                        <Link to="/wFive"><button onClick={(e) => updateFound('True')}>Yes</button></Link>
                        <Link to="/wFive"><button onClick={(e) => updateFound('False')}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProp(state) {
    return {
        found: state.found
    }
}

export default connect(mapStateToProp, { updateFound })(WizardFour);