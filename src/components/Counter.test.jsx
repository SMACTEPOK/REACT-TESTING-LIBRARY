import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from 'vitest';
import { Counter } from './Counter';

describe('Counter', () => {
  test('відображає початкове значення 0', () => {
    render(<Counter />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('збільшує та зменшує значення', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    
    await user.click(screen.getByText('+1'));
    expect(screen.getByText('1')).toBeInTheDocument();
    
    await user.click(screen.getByText('-1'));
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('скидає значення до 0', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    
    await user.click(screen.getByText('+1'));
    await user.click(screen.getByText('+1'));
    await user.click(screen.getByText('Reset'));
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
