import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions'

class Payment extends React.Component {
  state = {  }
  render() { 
    return ( 
      <StripeCheckout
        name='Emaily'
        description='$5 from 5 email credits'
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}
 
export default connect(null, actions)(Payment);
 