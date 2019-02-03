import { FETCH_USER } from "../actions/types";
export default function (state=null,action){
  console.log("in auth reducer"+action.type+"end");
  switch(action.type){
    case FETCH_USER:
    console.log(action.payload);
    return action.payload;
    default:
    return state;
  }
}
