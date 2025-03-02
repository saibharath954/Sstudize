import React from 'react';
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import { BsStarHalf } from "react-icons/bs";

type Props = {
    image: string;
    name: string;
    rating: string;
};

const ClientReviewCard = ({image, name, rating}: Props) => {
  return (
    <div className='bg-white shadow-md p-8 sm-flex items-center space-y-4 sm:space-y-0 space-x-6 rounded-lg'>
        <div className='flex items-center'>
            <div className='mr-4'><Image src={image} alt={name} width={300} height={300} className='rounded-full' /></div>
            <div>
                <h1 className='text-xl font-semibold text-blue-950'>{name}</h1>
                <div className='flex items-center space-x-3'>
                    <p className='text-orange-500 font-bold text-lg'>{rating}</p>
                    <div className='flex items-center'>
                        <FaStar className='w-5 h-5 text-yellow-400' />
                        <FaStar className='w-5 h-5 text-yellow-400' />
                        <FaStar className='w-5 h-5 text-yellow-400' />
                        <FaStar className='w-5 h-5 text-yellow-400' />
                        <BsStarHalf className='w-5 h-5 text-yellow-400' />
                    </div>
                </div>
                <p className='mt-2 text-base text-gray-700 font-medium'>Sstudize has been a game-changer for me. The AI-driven roadmap has helped me to focus on my weak areas and improve my overall performance.</p>
            </div>
        </div>
    </div>
  )
}

export default ClientReviewCard;