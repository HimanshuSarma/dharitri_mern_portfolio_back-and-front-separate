import React from 'react';
import ContentWrapper from '../Components/UIElements/ContentWrapper';

import './Payment.css';

const Payment = () => {
  return (
    <div className='payment-page-whole-screen-wrapper'>
      <ContentWrapper>
        <h1 className='page-main-header'>
          Payment Details: 
        </h1>

        <div className='payment-page-details-wrapper'>
          <h3 className='payment-page-secondary-header font-wt-400'>Deliver to</h3>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Payment