import React from 'react';
import Lab16Page from './pages/Lab16Page';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__brand">
          <span className="app__brand-mark">✱</span>
          CRAFTMARKET
          <span className="app__brand-tag">LAB 16</span>
        </div>
      </header>
      <main className="app__main">
        <Lab16Page />
      </main>
      <footer className="app__footer">
        <p>© 2026 CRAFTMARKET · Лабораторна робота 16 · Testing</p>
      </footer>
    </div>
  );
}
export default App;
