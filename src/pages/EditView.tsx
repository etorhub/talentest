import { useState } from 'react';
import { Ad } from '../models';
import { AdForm } from '../components';
import { useAppState } from '../state';

interface EditViewProps {
  handleClose: () => void;
  ad: Ad;
}

function EditView({ handleClose, ad }: EditViewProps) {
  const [adForm, setAdForm] = useState<Ad>(ad);
  const { actions } = useAppState();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // handle creating the ad
    actions.updateAd(adForm);
    // clear form and close modal
    handleClose();
  };

  return (
    <AdForm
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      adForm={adForm}
      setAdForm={setAdForm}
      type="Edit"
    />
  );
}

export default EditView;
