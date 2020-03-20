import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_nW8vBwAtWou878HWwPgPqe5W00RHTJDT5x';
    const onToken = token =>{alert('Payment Successful')};
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Tech Ranga Ltd'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your Total Is $${price}`}
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}


export default StripeCheckoutButton;