import { LOGIN, SETCOURSES } from "./createaction";

export function setCourses(payload){

  return {
    type:SETCOURSES,
    payload:payload
  }

}

export function login(){

  return{
    type:LOGIN,
    payload:true
  }

}