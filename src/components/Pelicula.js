import React from 'react' ;
import './pelicula.css'

function Pelicula(props) {

    let listadoDeGeneros;

    if (props.generos != null) {
        listadoDeGeneros =
        <ul>
            {props.generos.map( (genero,i) => <li key={genero+i} > {genero} </li>)}
        </ul>
    } else {
        listadoDeGeneros = ""
    }

    return (
        <div className='movie'>
            <h2 className='movie'>{props.titulo}</h2>
            <p>Rating: {props.rating} </p>
                { listadoDeGeneros }
        </div>
    )
}

Pelicula.defaultProps = {
    rating : "Esta pelicula aún no fue puntuada!",
    generos : null
}


export default Pelicula ;
