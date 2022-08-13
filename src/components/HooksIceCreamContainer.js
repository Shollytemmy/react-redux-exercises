import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux/iceCream'

export const HooksIceCreamContainer = () => {
    const {numOfIceCream} = useSelector((state) => state.iceCream)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Num of Ice Cream- {numOfIceCream}</h2>
        <button onClick={() => dispatch(buyIceCream())}>Buy icecream</button>
    </div>
  )
}
