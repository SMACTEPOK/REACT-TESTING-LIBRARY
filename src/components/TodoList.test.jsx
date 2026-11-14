import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from 'vitest';
import { TodoList } from './TodoList';

describe('TodoList', () => {
  test('додає, редагує та видаляє завдання', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Add
    await user.type(screen.getByLabelText('new-todo'), 'Завдання 1');
    await user.click(screen.getByText('Додати'));
    expect(screen.getByText('Завдання 1')).toBeInTheDocument();

    // Toggle
    await user.click(screen.getByLabelText(/toggle-/));
    expect(screen.getByText('Завдання 1')).toHaveStyle('text-decoration: line-through');

    // Delete
    await user.click(screen.getByText('✕'));
    expect(screen.queryByText('Завдання 1')).not.toBeInTheDocument();
  });
});
