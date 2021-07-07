
// import { useState, useEffect } from 'react';

export default function Film({film, handleCardClick}){

  // const [comments, setComments] = useState([]);

  const link = film.medium_cover_image;
  const id = film.id;

  function handleClick(e) {
    handleCardClick({
      link,
      id
    })
  }

  return(
    <li className="film">
      <img className="film_img" alt={film.title_english} src={film.medium_cover_image}></img>
      <h2 className="film_title">{film.title_english} ({film.year})</h2>
      {/* <p>Year: </p> */}
      <div className="film_description"> 
        <p>Rating: {film.rating}</p>
        <button onClick={handleClick} className="film_btn">Add comment</button>
      </div>
      
    </li>
  )
}