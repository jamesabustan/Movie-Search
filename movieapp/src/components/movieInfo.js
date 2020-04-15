import React from 'react';



// pass in the props into the component
const MovieInfo = ({image,title,description,year,imdb}) =>{
    return(
        <div>
            <img src={image} />
            <br />
            <h1 ><a href={`https://www.imdb.com/title/${imdb}`}>{title}</a></h1>
            <br />
            <h3>{year}</h3>
            <br />
            <p>{description}</p>
            <br />
            
        </div>
    )
}

export default MovieInfo;