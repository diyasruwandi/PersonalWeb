import React from 'react';
import type { MessageData } from '../data/types';

interface CardItemProps {
  data: MessageData;
}

const CardItem: React.FC<CardItemProps> = ({ data }) => (
  <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:shadow-lg transition-shadow p-6">
    <h5 className="text-xl font-semibold text-white mb-2">{data.name}</h5>
    <p className="text-gray-300">{data.message}</p>
  </div>
);

export default CardItem;
