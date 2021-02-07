import Pelicula from './Pelicula';

function TiraPeliculas() {
    return (
        <div>
            <Pelicula rating = '8.0' titulo= 'La delgada linea roja'generos ={['accion', 'drama']} />
            <Pelicula rating = '9.5' titulo = 'Apocalipsis now' generos ={['accion', 'drama']} />
            <Pelicula rating = '7.0' titulo = 'Inception' generos = {['ciencia ficcion', 'suspenso']} />
            <Pelicula rating = '8.5' titulo = 'Nieve negra'generos = {['drama']} />
        </div>
    )
}

export default TiraPeliculas