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

export default function Results() {
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

  return <>
    <header>
      <img className="logo" src={logo} alt="Max"/>
      <form action="">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <FormControl
              margin="normal">
              <InputLabel htmlFor="search">Pesquisar por cidade</InputLabel>
              <Input
                id="search"
                margin="normal" 
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
    <div className="container container-results">
      <div className="content">
        <Typography variant="h5" gutterBottom>
          Resultado da busca
        </Typography>
        <hr/>
        <ul className="spot-list">
          {spots.map(spot => (
            <li key={spot._id}>
              <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }}></header>
              <div className="spot-content">
                <p className="features">1 Bateria · 2 Guitarras · 2 Baixos</p>
                <p className="title">{spot.company}</p>
                <p className="price">R${spot.price},00/h</p>
                <p className="nota"><StarIcon color="action" fontSize="small"/><StarIcon color="action" fontSize="small"/><StarIcon color="action" fontSize="small"/><StarIcon color="action" fontSize="small"/><StarBorderIcon color="action" fontSize="small"/></p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
}