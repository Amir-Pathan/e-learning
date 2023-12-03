import { LOGIN, SETCOURSES } from "./createaction";


const initialState={
  login:false,
  courses:[]
}

function reducer(state=initialState,action){

  switch(action.type){

    case SETCOURSES:
      return {
        ...state,
        courses:action.payload

      }
    case LOGIN:{
      return {
        ...state,
        login:action.payload
      }
    }
    default:
      return state

  }

}

export default reducer