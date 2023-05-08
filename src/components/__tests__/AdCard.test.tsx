import { render } from '@testing-library/react';
import AdCard from '../AdCard';
import { Ad } from '../../models';

describe('AdCard', () => {
  const ad: Ad = {
    id: '1',
    productId: '1',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description',
    headline: 'This is a headline',
    cta: 'This is a CTA',
    url: 'https://www.example.com',
  };
  const handleEdit = jest.fn();
  const handleDelete = jest.fn();

  it('renders, shows contents and calls handlers', () => {
    const { getByText } = render(
      <AdCard ad={ad} handleEdit={handleEdit} handleDelete={handleDelete} />
    );
    expect(getByText(ad.headline)).toBeInTheDocument();
    expect(getByText(ad.description)).toBeInTheDocument();
    expect(getByText(ad.cta)).toBeInTheDocument();

    expect(handleEdit).not.toHaveBeenCalled();
    expect(handleDelete).not.toHaveBeenCalled();

    getByText('Edit').click();
    expect(handleEdit).toHaveBeenCalledTimes(1);
    expect(handleEdit).toHaveBeenCalledWith(ad.id);

    getByText('Delete').click();
    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleDelete).toHaveBeenCalledWith(ad.id);
  });
});
