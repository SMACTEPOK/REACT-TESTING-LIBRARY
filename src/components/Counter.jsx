import React, { useState } from 'react';
export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="lab-card">
      <h2 className="lab-card__title">01 / Counter</h2>
      <div className="stat-box" style={{ marginBottom: '16px' }}>
        <p className="stat-number">{count}</p>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button className="btn" onClick={() => setCount(c => c + 1)}>+1</button>
        <button className="btn" onClick={() => setCount(c => c - 1)}>-1</button>
        <button className="btn btn--danger" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
