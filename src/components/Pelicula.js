import React from 'react' ;

function Pelicula(props) {

    let generos = ["Accion", "Drama"]

    return (
        <>
            <h2>{props.titulo}</h2>
            <p>Rating: {props.rating} </p>
            <ul>
                {generos.map( genero => <li> {genero} </li>)}
            </ul>
        </>
    )
}



export default Pelicula ;
