import React from 'react';
import PropTypes from 'prop-types';
import Razorpay from 'react-razorpay';

const RazorpayButton = ({ amount }) => {
  const options = {
    key: 'Y3BsrOfUuFzhbBW6j9UoEDME',
    amount: amount * 100, // Razorpay expects the amount in paise, so multiply by 100
    currency: 'INR',
    name: 'Your Company Name',
    description: 'Payment for Your Product',
    image: 'https://example.com/logo.png',
    order_id: 'order_12345', // Generate a unique order ID for each transaction
    handler: (response) => {
      // Handle the success response after payment
      console.log(response);
    },
    prefill: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      contact: '9999999999',
    },
  };

  return <Razorpay options={options} />;
};

// RazorpayButton.propTypes = {
//   amount: PropTypes.number.isRequired,
// };

export default RazorpayButton;