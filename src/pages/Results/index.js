import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.scss';
import logo from '../../assets/max-logo.png';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
} from '@material-ui/pickers';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Container from '@material-ui/core/Container';

import img1 from '../../assets/studio3.jpg'
import img2 from '../../assets/studio4.jpg'
import img3 from '../../assets/studio5.jpg'

export default function Results({ history }) {
  const [spots, setSpots] = useState([]);

  const [inicioDate, setInicioDate] = React.useState(new Date());
  const [fimDate, setFimDate] = React.useState(new Date());

  const handleInicioChange = date => {
    setInicioDate(date);
  };

  const handleFimChange = date => {
    setFimDate(date);
  };
  
  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/spots', {
        headers: { user_id }
      });
      setSpots(response.data)
    }
    loadSpots()
  }, []);

  const goToEstudio = () => {
    // history.push('/estudio');
  }

  const goHome = () => {
    history.push('/');
  }

  return <>
    <header>
      <img className="logo" src={logo} alt="Max" onClick={goHome}/>
      <form action="">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <FormControl
              margin="normal">
              <InputLabel htmlFor="search">Pesquisar por cidade</InputLabel>
              <Input
                id="search"
                className="search"
                type="search"
                value="Jaraguá"
              />
            </FormControl>
            <DateTimePicker
              margin="normal"
              id="date-inicio-dialog"
              label="Início do ensaio"
              format="dd/MM/yyyy HH:mm"
              value={inicioDate}
              onChange={handleInicioChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <DateTimePicker
              margin="normal"
              id="date-fim-dialog"
              label="Final do ensaio"
              format="dd/MM/yyyy HH:mm"
              value={fimDate}
              onChange={handleFimChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </form>
    </header>
    <Container maxWidth="sm">
      <div className="container container-results">
        <div className="content">
          <Typography variant="h5" gutterBottom>
            Resultado da busca
          </Typography>
          <hr/>
          <ul className="spot-list">
              <li onClick={goToEstudio}>
                <header style={{ backgroundImage: `url(${img1})` }}></header>
                <div className="spot-content">
                  <p className="features">1 Bateria · 2 Guitarras · 2 Baixos</p>
                  <p className="title">Estúdio Vó Bia</p>
                  <p className="price">R$60,00/h</p>
                  <p className="nota"><StarIcon color="action" fontSize="small"/><StarIcon color="action" fontSize="small"/><StarIcon color="action" fontSize="small"/><StarIcon color="action" fontSize="small"/><StarBorderIcon color="action" fontSize="small"/></p>
                </div>
              </li>
              <li onClick={goToEstudio}>
                <header style={{ backgroundImage: `url(${img2})` }}></header>
                <div className="spot-content">
                  <p className="features">1 Bateria · 2 Guitarras · 1 Baixo · 1 Teclado</p>
                  <p className="title">Estúdio Ian Keil</p>
                  <p className="price">R$50,00/h</p>
                  <p className="nota"><StarIcon color="action" fontSize="small"/><StarIcon color="action" fontSize="small"/><StarIcon color="action" fontSize="small"/><StarIcon color="action" fontSize="small"/><StarIcon color="action" fontSize="small"/></p>
                </div>
              </li>
              <li onClick={goToEstudio}>
              <header style={{ backgroundImage: `url(${img3})` }}></header>
              <div className="spot-content">
                <p className="features">1 Bateria · 3 Guitarras · 1 Baixo</p>
                <p className="title">Escola de Música Joe's</p>
                <p className="price">R$45,00/h</p>
                <p className="nota"><StarIcon color="action" fontSize="small"/><StarIcon color="action" fontSize="small"/><StarIcon color="action" fontSize="small"/><StarIcon color="action" fontSize="small"/><StarBorderIcon color="action" fontSize="small"/></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </>
}