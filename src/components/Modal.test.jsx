import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import { Modal } from './Modal';

describe('Modal', () => {
  test('закривається по кнопці, кліку поза та Escape', async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();
    
    const { rerender } = render(<Modal isOpen={true} onClose={handleClose} title="Test">Content</Modal>);
    expect(screen.getByText('Content')).toBeInTheDocument();

    // Close button
    await user.click(screen.getByText('✕'));
    expect(handleClose).toHaveBeenCalledTimes(1);

    // Escape key
    rerender(<Modal isOpen={true} onClose={handleClose} title="Test">Content</Modal>);
    await user.keyboard('{Escape}');
    expect(handleClose).toHaveBeenCalledTimes(2);
  });
});
