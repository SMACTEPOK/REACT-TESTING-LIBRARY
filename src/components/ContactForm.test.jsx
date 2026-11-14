import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import { ContactForm } from './ContactForm';

describe('ContactForm', () => {
  test('відображає помилки валідації', async () => {
    const user = userEvent.setup();
    render(<ContactForm onSubmit={vi.fn()} />);
    
    await user.click(screen.getByText('Відправити'));
    expect(screen.getByText('Мінімум 3 символи')).toBeInTheDocument();
    expect(screen.getByText('Некоректний email')).toBeInTheDocument();
    expect(screen.getByText('Мінімум 10 символів')).toBeInTheDocument();
  });

  test('успішно відправляє форму', async () => {
    const handleSubmit = vi.fn();
    const user = userEvent.setup();
    render(<ContactForm onSubmit={handleSubmit} />);
    
    await user.type(screen.getByLabelText('name-input'), 'Іван');
    await user.type(screen.getByLabelText('email-input'), 'test@test.com');
    await user.type(screen.getByLabelText('message-input'), 'Це тестове повідомлення');
    await user.click(screen.getByText('Відправити'));
    
    expect(handleSubmit).toHaveBeenCalledWith({ name: 'Іван', email: 'test@test.com', message: 'Це тестове повідомлення' });
  });
});
