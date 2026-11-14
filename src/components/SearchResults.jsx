import React, { useState, useEffect } from 'react';

export function SearchResults({ fetchData }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query.length < 2) { setResults([]); return; }
    
    setLoading(true);
    setError(null);

    const timer = setTimeout(async () => {
      try {
        const data = await fetchData(query);
        setResults(data);
      } catch (err) {
        setError('Помилка завантаження');
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, fetchData]);

  return (
    <div className="lab-card">
      <h2 className="lab-card__title">03 / Search (Async)</h2>
      <input className="lab-input" value={query} onChange={e => setQuery(e.target.value)} placeholder="Введіть запит (мін. 2 символи)..." aria-label="search-input" />
      
      <div style={{ marginTop: '16px' }}>
        {loading && <p style={{ color: 'var(--color-success)' }}>Завантаження...</p>}
        {error && <p role="alert" style={{ color: 'var(--color-danger)' }}>{error}</p>}
        {!loading && !error && query.length >= 2 && results.length === 0 && <p>Нічого не знайдено</p>}
        <ul>{results.map(r => <li key={r.id}>{r.name}</li>)}</ul>
      </div>
    </div>
  );
}
