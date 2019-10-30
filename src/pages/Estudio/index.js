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

import img1 from '../../assets/studio3.jpg'
import img2 from '../../assets/studio4.jpg'
import img3 from '../../assets/studio5.jpg'

export default function Estudio({ history }) {
  const [spots, setSpots] = useState([]);

  const [inicioDate, setInicioDate] = React.useState(new Date());
  const [fimDate, setFimDate] = React.useState(new Date());

  const handleInicioChange = date => {
    setInicioDate(date);
  };

  const handleFimChange = date => {
    setFimDate(date);
  };
  
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
    <div className="container container-estudio">
      <div className="content">
        <Typography variant="h5" gutterBottom>
          Estúdio Vó Bia
        </Typography>
        <hr/>
        <div className="description">
          
        </div>
      </div>
    </div>
  </>
}