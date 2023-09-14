import React from 'react';
import SupportForm from './SupportForm';

const Support = () => {
  const handleSubmit = (data) => {
    // You can handle the form submission here (e.g., send data to a server)
    console.log('Form submitted:', data);
  };

  return (
    <div className='support'>
      <h2>Contact Customer Support</h2>
      <SupportForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Support;