import React from 'react' ;

function Pelicula() {

    let rating = 5.8;
    let generos = ["Accion", "Drama"]

    return (
        <>
            <h2>Titulo de la Pelicula !!!</h2>
            <p>Rating: {rating} </p>
            <ul>
                {generos.map( genero => <li> {genero} </li>)}
            </ul>
        </>
    )
}



export default Pelicula ;
