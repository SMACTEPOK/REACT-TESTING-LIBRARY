import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import { SearchResults } from './SearchResults';

describe('SearchResults', () => {
  test('відображає результати після пошуку', async () => {
    const mockFetch = vi.fn().mockResolvedValue([{ id: 1, name: 'Результат 1' }]);
    const user = userEvent.setup();
    render(<SearchResults fetchData={mockFetch} />);
    
    await user.type(screen.getByLabelText('search-input'), 'тест');
    
    await waitFor(() => {
      expect(screen.getByText('Результат 1')).toBeInTheDocument();
    }, { timeout: 1000 });
  });

  test('відображає помилку при невдалому запиті', async () => {
    const mockFetch = vi.fn().mockRejectedValue(new Error('Error'));
    const user = userEvent.setup();
    render(<SearchResults fetchData={mockFetch} />);
    
    await user.type(screen.getByLabelText('search-input'), 'тест');
    
    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('Помилка завантаження');
    }, { timeout: 1000 });
  });
});
