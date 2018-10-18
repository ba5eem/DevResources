import axios from 'axios';

export const LOAD_CARDS = 'LOAD_CARDS';

export const loadCards = () => {
  return function(dispatch){
    return axios.get('/cards')
    .then( cards => {
      console.log(cards);
      dispatch({
        type: LOAD_CARDS,
        payload: cards.data
      });
    });
  }
}


