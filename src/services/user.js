import { login } from "../redux/actions"

import { useDispatch } from "react-redux"

export function user(){

  let user = localStorage.getItem('user')

  if(user===null) return false

  return JSON.parse(user)

}