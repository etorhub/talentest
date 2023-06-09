import { useState } from 'react';
import { Ad } from '../models';
import { AdForm } from '../components';
import { v4 as uuidv4 } from 'uuid';
import { useAppState } from '../state';

interface CreateViewProps {
  productId: string;
  handleClose: () => void;
}

const initialState = (productId: string): Ad => ({
  productId,
  id: uuidv4(),
  image: '',
  description: '',
  headline: '',
  cta: '',
  url: '',
});

function CreateView({ productId, handleClose }: CreateViewProps) {
  const [adForm, setAdForm] = useState<Ad>(initialState(productId));
  const { actions } = useAppState();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // handle creating the ad
    actions.addAd(adForm);
    setAdForm(initialState(productId));
    handleClose();
    // clear form and close modal
  };

  return (
    <AdForm
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      adForm={adForm}
      setAdForm={setAdForm}
      type="Create"
    />
  );
}

export default CreateView;
