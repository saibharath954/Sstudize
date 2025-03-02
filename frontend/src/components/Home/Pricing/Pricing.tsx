import React from 'react';
import PriceCard from './PriceCard';

const Pricing = () => {
  return (
    <div className='pt-16 pb-16 bg-white'>
        <h1 className='text-3xl md:text-4xl font-bold text-purple-900 text-center'>
            Start your Sstudize journey today
        </h1>
        <p className='text-lg text-gray-600 text-center mt-2 max-w-xl mx-auto'>
            Choose the right plan for you
        </p>
        <div className='w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center'>
            <div>
                <PriceCard time="6 Month" price="39.99" />
            </div>
            <div>
                <PriceCard time="12 Month" price="19.99" />
            </div>
            <div>
                <PriceCard time="Liftime" price="9.99" />
            </div>
        </div>
    </div>
  )
}

export default Pricing;