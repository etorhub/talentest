import { useState } from 'react';
import { Product } from '../models';

interface ProductCardProps {
  product: Product;
  handleProductClick: (id: string) => void;
}

const ProductCard = ({ product, handleProductClick }: ProductCardProps) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = (e: any) => {
    e.stopPropagation();
    setShowMore(!showMore);
  };

  const description =
    product.productDescription.length > 200
      ? showMore
        ? product.productDescription
        : product.productDescription.slice(0, 200) + '...'
      : product.productDescription;

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={() => handleProductClick(product.productId)}
    >
      <img src={product.productImage} alt={product.productName} />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {product.productName}
        </h3>
        <p className="text-gray-700 mb-2">{description}</p>
        {product.productDescription.length > 200 && (
          <button
            className="text-blue-500 hover:text-blue-700 font-medium"
            onClick={toggleShowMore}
          >
            {showMore ? 'See Less' : 'See More'}
          </button>
        )}
        <div className="mt-4">
          <span className="text-gray-500 text-sm font-medium">
            Price: {product.price} USD
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
