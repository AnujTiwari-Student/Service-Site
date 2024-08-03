import React from 'react';
import { LucideIcon, BarChart, Code, Edit, Brush } from 'lucide-react'; // Importing specific icons

type CardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
  bgColor: string;
};

const Card: React.FC<CardProps> = ({ title, description, Icon, bgColor }) => {
  return (
    <div className='w-48 md:w-96 xl:w-72 px-6 py-10 rounded-xl flex flex-col items-center hover:shadow-xl duration-500 transform transition-transform hover:-translate-y-2'>
      <div className={`h-20 w-20 rounded-3xl flex items-center justify-center mb-4 ${bgColor}`}>
        <Icon className='h-10 w-10' />
      </div>
      <div className='text-center'>
        <h1 className='text-lg font-bold mb-2'>{title}</h1>
        <p className='text-sm md:text-base'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
