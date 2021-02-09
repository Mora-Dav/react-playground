import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Pelicula from './Pelicula';


class TiraPeliculas extends Component {

    render () {
       
        return (
            <div>
                <Pelicula rating = '8.0' titulo= 'La delgada linea roja'generos ={['accion', 'drama']} />
                <Pelicula titulo = 'Apocalipsis now' generos ={['accion', 'drama']} />
                <Pelicula rating = '7.0' titulo = 'Inception' generos = {['ciencia ficcion', 'suspenso']} />
                <Pelicula rating = '8.5' titulo = 'Nieve negra' />
            </div>
        )
    }
}

export default TiraPeliculas