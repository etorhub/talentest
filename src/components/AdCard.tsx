import React from 'react';
import { Ad } from '../models';

type AdCardProps = {
  ad: Ad;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
};

const AdCard = ({ ad, handleEdit, handleDelete }: AdCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200 relative">
        <img className="h-full w-full object-cover" src={ad.image} alt="" />
        <div className="absolute top-0 left-0 p-2">
          <img
            className="h-8 w-8"
            src="https://admockups.com/images/facebook.png"
            alt="Facebook Logo"
          />
        </div>
        <div className="absolute top-0 right-0 p-2">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2"
            onClick={() => handleEdit(ad.id)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            onClick={() => handleDelete(ad.id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-800 font-medium text-lg mb-2">{ad.headline}</p>
        <p className="text-gray-700 text-base">{ad.description}</p>
        <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-md hover:bg-blue-600">
          {ad.cta}
        </button>
      </div>
    </div>
  );
};

export default AdCard;
