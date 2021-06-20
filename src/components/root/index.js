import { useState, useEffect } from 'react';
import { api } from '../../utils/api';
import List from '../List/List';
import ImagePopup from '../ImagePopup/ImagePopup';

export default function Root(){
  const [films, setFilms] = useState([]);
  const [showCard, setShowCard] = useState({});

  useEffect(()=>{
    api.getFilms()
      .then((res)=>{
        setFilms(res.data.movies)
      })
      .catch(err=>console.log(err))
  },[]);

  const cardAddComment = (obj) => {
    console.log(obj.comments)
  }

  const handleCardClick = (obj) =>{
    // console.log(obj)
    return setShowCard(obj)
  }

  const closePopup = () => {
    setShowCard({});
  }

  return(
    <div className="root">
      <List
        films={films}
        onCardClick = {handleCardClick}
      />
      <ImagePopup
        card={showCard}
        onClose={closePopup}
        cardAddComment={cardAddComment}
      />
    </div>
  )
}