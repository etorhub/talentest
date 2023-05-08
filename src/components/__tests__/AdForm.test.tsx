import { render } from '@testing-library/react';
import { AdForm } from '../';
import { Ad } from '../../models';
import userEvent from '@testing-library/user-event';

describe('AdForm', () => {
  const handleSubmit = jest.fn();
  const handleClose = jest.fn();
  const setAdForm = jest.fn();
  const adForm: Ad = {
    productId: '1',
    id: '1',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description',
    headline: 'This is a headline',
    cta: 'This is a CTA',
    url: 'https://www.example.com',
  };

  test('works in create mode', () => {
    const { getByText, getByLabelText, getByPlaceholderText, getByRole } =
      render(
        <AdForm
          type="Create"
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          adForm={adForm}
          setAdForm={setAdForm}
        />
      );

    expect(getByText(/Create New ad/i)).toBeInTheDocument();
    userEvent.type(getByLabelText(/description/i), 'New description');

    userEvent.type(getByLabelText(/headline/i), 'New headline');
    userEvent.type(
      getByPlaceholderText(/Enter a call to action for your ad.../i),
      'New CTA'
    );
    userEvent.type(
      getByPlaceholderText(/Enter a call to action url for your ad.../i),
      'https://www.example.com'
    );

    userEvent.click(getByRole('button', { name: /Create/i }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
  test('works in edit mode', () => {
    const { getByText } = render(
      <AdForm
        type="Edit"
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        adForm={adForm}
        setAdForm={setAdForm}
      />
    );
    expect(getByText(/Edit ad/i)).toBeInTheDocument();
  });
});
