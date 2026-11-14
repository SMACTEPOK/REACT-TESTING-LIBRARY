import React, { useState } from 'react';
export function ContactForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (form.name.length < 3) newErrors.name = 'Мінімум 3 символи';
    if (!form.email.includes('@')) newErrors.email = 'Некоректний email';
    if (form.message.length < 10) newErrors.message = 'Мінімум 10 символів';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onSubmit(form);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="lab-card">
      <h2 className="lab-card__title">02 / Contact Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div className="form-field">
          <input className={`lab-input ${errors.name ? 'input-error' : ''}`} placeholder="Ім'я" value={form.name} onChange={e => setForm({...form, name: e.target.value})} aria-label="name-input" />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>
        <div className="form-field">
          <input className={`lab-input ${errors.email ? 'input-error' : ''}`} placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} aria-label="email-input" />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <div className="form-field">
          <textarea className={`lab-input ${errors.message ? 'input-error' : ''}`} placeholder="Повідомлення" rows="3" value={form.message} onChange={e => setForm({...form, message: e.target.value})} aria-label="message-input" />
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>
        <button type="submit" className="btn">Відправити</button>
      </form>
    </div>
  );
}
