import { useState } from 'react';
import { Ad } from '../models';
import { AddOrEditCard } from '../components/AdForm';
import { useAppState } from '../state/AppState';

interface EditViewProps {
  handleClose: () => void;
  ad: Ad;
}

function EditView({ handleClose, ad }: EditViewProps) {
  const [adForm, setAdForm] = useState<Ad>(ad);
  const [_, actions] = useAppState();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // handle creating the ad
    actions.updateAd(adForm);
    // clear form and close modal
    handleClose();
  };

  return (
    <AddOrEditCard
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      adForm={adForm}
      setAdForm={setAdForm}
      type="Edit"
    />
  );
}

export default EditView;
