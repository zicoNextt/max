import React, { useState } from 'react';
import api from '../../services/api';
import Button from '@material-ui/core/Button';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const response = await api.post('/sessions', { email });
    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor email"
          value={email}
          onChange={ev => setEmail(ev.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </>
  )
}