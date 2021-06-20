import { useState} from 'react';

export default function ImagePopup({card, onClose}){

  const [inpValue, setInpValue] = useState('');
  const [comments, setComments] = useState([]);

  function addComment(e){
    e.preventDefault();
    if(inpValue){
      setComments((prev)=>[...prev, {
        value:inpValue,
        id: card.id,
        commentId: Math.random()
      }]);
      setInpValue('');
      
    }
  }

  function changeInpValue(e){
    setInpValue(e.target.value);
  }

  function deliteComment(id){
    console.log(id);
    setComments(prev => prev.filter(c => c.commentId !== id));
  }

  return (
    <section className={card.link ? `popup popup-show-card popup_opened` : `popup popup-show-card`}
      >

    <div className="popup__fullcard">
    <div className="popup__body popup__body-card">
        
        <img className="popup__img" src={card.link} alt={card.name} />
      </div>
      <div className="popup__comment">
        <div className="popup__comment_list">
          {
            comments.map((comment) => {
              if(card.id === comment.id){
                return (
                  <div key={comment.commentId}>
                  <p className="popup__comment_text"><span className="popup__comment_text-bold">Пользователь: </span>{comment.value}</p>
                  <button 
                    onClick={()=>{
                      deliteComment(comment.commentId)
                    }}
                    className="popup__del" 
                  >Удалить</button>
                  </div>
                )
              }
            })
          }
        </div>
        <form   className="popup__form">
          <button 
            className="popup__close button-hover" 
            type="button" 
            onClick={onClose}
          />
            <input 
              value={inpValue} 
              onChange={changeInpValue}
              placeholder="comment"
              className="popup__input"
            />
            <button onClick={addComment} className="popup__form-btn">Add</button>
          </form>
      </div>
    </div>
     
      
    </section>
  )
}