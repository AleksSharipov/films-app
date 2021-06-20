class Api{
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  getFilms(){
    return fetch(`${this.url}`, {
      method: 'GET',
    })
      .then((res) =>{
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Error ${res.status}`));
      })
  }

  
}

const baseUrl = 'https://yts.mx/api/v2/list_movies.json';

export const api = new Api(baseUrl);