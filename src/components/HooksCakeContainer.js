import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cakeAction } from '../redux'


export const HooksCakeContainer = () => {
    const {numOfCake} = useSelector((state) => state.cake)
    console.log(numOfCake)

    const dispatch = useDispatch()
  return (
    <div>
        <h1>Number of cakes - {numOfCake}</h1>
        <button onClick={() => dispatch(cakeAction())}>Buy cake</button>
    </div>
  )
}
