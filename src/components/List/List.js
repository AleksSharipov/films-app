import Film from '../Film/Film';


export default function List({films,onCardClick}){
  return(
    <section>
      <ul className="films">
        {
          films.map((film)=>{
            return(
              <Film
                key={film.id}
                film={film}
                handleCardClick = {onCardClick}
              />
            )
          })
        }
      </ul>
    </section>
  )
}