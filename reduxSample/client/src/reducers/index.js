import { LOAD_CARDS } from '../actions/index.js';

const cards = (state = [], action) => {


 switch(action.type){
   case LOAD_CARDS:
      return action.payload;
   default:
      return state
  }
}

export default cards;