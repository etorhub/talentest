import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AdCard } from '../components';
import { Product, Ad } from '../models';
import { useAppState } from '../state';
import { CreateView, EditView, DeleteView } from '.';

type Params = {
  productId: string;
};

const ReadView = () => {
  const { productId } = useParams<Params>();
  const { state } = useAppState();
  const [selectedAd, setSelectedAd] = useState<Ad | undefined>(undefined);
  const [showModal, setShowModal] = useState<
    false | 'create' | 'edit' | 'delete'
  >(false);

  const { ads, products } = state;

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const product: Product | undefined = products.find(
    (product) => product.productId === productId
  );

  if (!product)
    return (
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-medium text-gray-900">
          Product not found
        </h2>
      </div>
    );

  const filteredAds = ads.filter((ad) => ad.productId === productId);
  if (!filteredAds.length) {
    return (
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-medium text-gray-900">No ads found</h2>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={() => setShowModal('create')}
            >
              New Ad
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      {product && (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-medium text-gray-900">
              {product.productName} Ads
            </h2>
            <div className="flex items-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                onClick={() => setShowModal('create')}
              >
                New Ad
              </button>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {filteredAds.map((ad) => (
              <AdCard
                key={ad.id}
                ad={ad}
                handleEdit={() => {
                  setSelectedAd(ad);
                  setShowModal('edit');
                }}
                handleDelete={() => {
                  setSelectedAd(ad);
                  setShowModal('delete');
                }}
              />
            ))}
          </div>
          {showModal === 'create' && productId && (
            <CreateView productId={productId} handleClose={handleCloseModal} />
          )}
          {showModal === 'edit' && selectedAd && (
            <EditView ad={selectedAd} handleClose={handleCloseModal} />
          )}
          {showModal === 'delete' && selectedAd && (
            <DeleteView id={selectedAd.id} handleClose={handleCloseModal} />
          )}
        </>
      )}
    </div>
  );
};

export default ReadView;
