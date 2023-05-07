import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../state';

const IndexView = () => {
  const [state] = useAppState();
  const navigate = useNavigate();
  const handleProductClick = (id: string) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {state.products.map((product) => (
          <ProductCard
            key={product.productName}
            handleProductClick={handleProductClick}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default IndexView;
