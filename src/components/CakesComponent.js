import React from 'react'
import { useDispatch } from 'react-redux'
import {cakeAction} from '../redux/cake/cakeActions'

export const CakesComponent = ({numberOfCake}) => {
    const dispatch = useDispatch()
  return (
    <div>
        <h2>{numberOfCake}</h2>
        <button onClick={() => dispatch(cakeAction())}>Buy cakes</button>
    </div>
  )
}
