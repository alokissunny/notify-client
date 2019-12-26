import { combineReducers } from 'redux'
import product from './productReducer'
import topic from './topicReducer'
const compareApp = combineReducers({
  product,
   topic
});

export default compareApp