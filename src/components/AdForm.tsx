import { useEscapeKey } from '../hooks';

interface AddOrEditCardProps {
  adForm: any;
  setAdForm: any;
  handleSubmit: any;
  handleClose: () => void;
  type: 'Create' | 'Edit';
}

const AddOrEditCard = ({
  adForm,
  setAdForm,
  handleSubmit,
  handleClose,
  type,
}: AddOrEditCardProps) => {
  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAdForm({
        ...adForm,
        image: reader.result as string,
      });
    };
  };
  useEscapeKey(handleClose);
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                  {type === 'Edit' ? 'Edit Ad' : 'Create New Ad'}
                </h3>
                {type === 'Edit' && (
                  <img src={adForm.image} alt="Ad" className="mb-2" />
                )}
                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Image Upload
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="form-input w-full"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Enter a description for your ad..."
                    value={adForm.description}
                    onChange={(e) =>
                      setAdForm({
                        ...adForm,
                        description: e.target.value,
                      })
                    }
                    className="form-textarea w-full"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="headline"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Headline
                  </label>
                  <input
                    type="text"
                    name="headline"
                    id="headline"
                    placeholder="Enter a headline for your ad..."
                    value={adForm.headline}
                    onChange={(e) =>
                      setAdForm({
                        ...adForm,
                        headline: e.target.value,
                      })
                    }
                    className="form-input w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cta_text"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Call to action text
                  </label>
                  <input
                    type="text"
                    placeholder="Enter a call to action for your ad..."
                    name="cta_text"
                    id="cta"
                    value={adForm.cta}
                    onChange={(e) =>
                      setAdForm({
                        ...adForm,
                        cta: e.target.value,
                      })
                    }
                    className="form-input w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cta_text"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Call to action url
                  </label>
                  <input
                    type="text"
                    name="cta_text"
                    placeholder="Enter a call to action url for your ad..."
                    id="cta"
                    value={adForm.url}
                    onChange={(e) =>
                      setAdForm({
                        ...adForm,
                        url: e.target.value,
                      })
                    }
                    className="form-input w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w auto sm:text-sm"
            >
              {type === 'Edit' ? 'Update' : 'Create'}
            </button>
            <button
              onClick={handleClose}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOrEditCard;
