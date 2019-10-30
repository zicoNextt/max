import React, { useState } from 'react';
import api from '../../services/api';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import logo from '../../assets/max-logo.png';

export default function Home({ history }) {
  const [search, setSearch] = useState('');
  
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const response = await api.post('/sessions', { search });
    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }

  const showResults = () => {
    history.push('/results');
  }

  return (
    <Container maxWidth="sm">
      <div className="container">
        <img className="logo" src={logo} alt="AirCnC"/>
        <div className="content">
          <p>
            Procure pelos melhores <strong>estúdios</strong> para fazer o seu som!
            <br/>
            <br/>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              id="search"
              placeholder="Buscar por cidade ou nome do estúdio"
              value={search}
              onChange={ev => setSearch(ev.target.value)}
            />
            <input
              type="text"
              id="fromDate"
              placeholder="Data de ida"
            />
            <input
              type="text"
              id="toDate"
              placeholder="Data de volta"
            />
            <Button type="submit" variant="contained" color="primary" onClick={showResults}>
              Buscar
            </Button>
          </form>
        </div>
      </div>
    </Container>
  )
}