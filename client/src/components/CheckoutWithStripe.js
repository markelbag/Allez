// import React from 'react';
// import StripeCheckout from 'react-stripe-checkout';

// // sample function defined to compute total quantity of cart
// // function computeQuantity(cart) {
// //     return cart.reduce((count, itemInCart) => count + itemInCart.quantity, 0);
// // }
// // similar functions can be defined to compute total price, email of the user, etc.
// const require = require('stripe')(process.env.STRIPE_SECRET);

// class CheckoutWithStripe extends React.Component {
//     onToken = () => {
//         fetch('/save-stripe-token', {
//             method: 'POST',
//             body: JSON.stringify(),
//         }).then(res => {
//             res.json().then(data => {
//                 console.log(`Payment token generated, ${data.name}`)
//             })
//         })
//     };

//     render() {
//         return (
//             <StripeCheckout
//                 amount = '10.00'
//                 name="Pay with Stripe!"
//                 // functions defined above can be used to add more information while making the API call.
//                 // description={`Order of ${computeQuantity(cart)} items!`}
//                 stripeKey="pk_test_51HTFfqJIuG4AzTsAYJAAJgXTTTRhAjmtU2bPsuU9JXomRSvGWS4NfgXKtfm2nuvaUzA7OELlaRIHlFshO7N5qgfr005cRH6Vro"
//                 currency="USD"
//                 email='USER_EMAIL'
//                 token={this.onToken}/>          
//         );
//     }
// }

// export default CheckoutWithStripe
