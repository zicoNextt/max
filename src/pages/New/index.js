import React, { useState, useMemo } from 'react';

import camera from '../../assets/camera.svg'

import './styles.css'

export default function New() {
  const [company, setCompany] = useState('')
  const [techs, setTechs] = useState('')
  const [price, setPrice] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])
  
  function handleSubmit() {

  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})`}}
        className={thumbnail ? 'has-thumbnail' : ''}
      >
        <input type="file" onChange={ev => setThumbnail(ev.target.files[0])} />
        <img src={camera} alt="Select img"/>
      </label>
      <label htmlFor="company">Empresa *</label>
      <input
        id="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={ev => setCompany(ev.target.value)}
      />

      <label htmlFor="techs">Tecnologias * <span>(separadas por vírgula)</span></label>
      <input
        id="techs"
        placeholder="Quais tecnologias usam"
        value={techs}
        onChange={ev => setTechs(ev.target.value)}
      />

      <label htmlFor="price">valor da diária * <span>(em  branco para Gratuito)</span></label>
      <input
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={ev => setPrice(ev.target.value)}
      />

      <button type="submit" className="btn">Enviar</button>
    </form>
  )
}