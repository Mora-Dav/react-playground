import React from 'react' ;

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
        <div>
            <h2>{props.titulo}</h2>
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
