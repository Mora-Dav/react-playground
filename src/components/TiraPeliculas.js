import Pelicula from './Pelicula';

function TiraPeliculas() {
    return (
        <div>
            <Pelicula rating = '8.0' titulo= 'La delgada linea roja'/>
            <Pelicula rating = '9.5' titulo = 'Apocalipsis now' />
            <Pelicula rating = '7.0' titulo = 'Inception'/>
            <Pelicula rating = '8.5' titulo = 'Nieve negra'/>
        </div>
    )
}

export default TiraPeliculas