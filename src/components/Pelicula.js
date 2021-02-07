import React from 'react' ;

function Pelicula(props) {


    return (
        <>
            <h2>{props.titulo}</h2>
            <p>Rating: {props.rating} </p>
            <ul>
                {props.generos.map( (genero,i) => <li key={genero+i} > {genero} </li>)}
            </ul>
        </>
    )
}



export default Pelicula ;
