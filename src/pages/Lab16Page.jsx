import React, { useState } from 'react';
import { Counter } from '../components/Counter';
import { ContactForm } from '../components/ContactForm';
import { SearchResults } from '../components/SearchResults';
import { TodoList } from '../components/TodoList';
import { Modal } from '../components/Modal';
import './Lab16Page.css';

// Імітація API для SearchResults
const mockApi = (q) => new Promise(res => setTimeout(() => res([{ id: 1, name: `Результат для "${q}"` }]), 500));

export default function Lab16Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="lab-page">
      <header className="lab-header">
        <h1 className="lab-title">TESTING</h1>
        <p className="lab-subtitle">React Testing Library & Vitest</p>
      </header>
      <main className="lab-main">
        <Counter />
        <ContactForm onSubmit={(data) => alert('Форма відправлена: ' + JSON.stringify(data))} />
        <SearchResults fetchData={mockApi} />
        <TodoList />
        
        <div className="lab-card">
          <h2 className="lab-card__title">05 / Modal</h2>
          <button className="btn" onClick={() => setIsModalOpen(true)}>Відкрити модальне вікно</button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Тестове вікно">
            <p>Це вміст модального вікна. Спробуйте закрити його кнопкою, кліком поза вікном або клавішею Escape.</p>
          </Modal>
        </div>
      </main>
    </div>
  );
}
