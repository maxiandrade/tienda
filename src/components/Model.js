import React from 'react';
import WomanImg from '../img/Model.png';


const Model = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        {}
        <div className='flex flex-col justify-center'>
          {}
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>trend
          </div>
          {}
          <h1 className='text-[90px] leading-[1.1] font-light mb-4'>
          Las Oreiro <br />
        
          </h1>
          <div className='font-semibold flex items-center uppercase'>
          Men's & Women's Clothing
          </div>
       
        </div>
       
        {}
        <div className='hidden lg:block'>
          <img src={WomanImg} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Model;
